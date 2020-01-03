import { DropShadowFilter } from '@pixi/filter-drop-shadow'
import * as PIXI from 'pixi.js'
import PixiTween from 'pixi-tween' // eslint-disable-line
import Plate from './Plate'
import { PlayerTypes } from './Constants'
import Settings from './Settings'
import { Surakarta, validateStep, Directions, getLoopRotation } from 'surakarta'
import VectorSprite from './VectorSprite'

/**
 * @extends PIXI.Application
 * @implements SurakartaResponder
 */
export class SurakartaPixi extends PIXI.Application {
    constructor (...args) {
        super(...args)

        // Initialize UI components
        this._createPebbleSprites(...SurakartaPixi.getPebbleUris())
        this.plate = this.stage.addChild(new Plate(this.onRequestedTurnMove))

        // Initialize game state
        this.state = {
            current: new Surakarta(),
            history: [new Surakarta()]
        }
        this.state.current.responders[2].push(this)
        this.config = {}
    }

    /** Call this before deviceready */
    initialize = () => {
        document.addEventListener('deviceready', this.onDeviceReady, false)
    }

    onDeviceReady = () => {
        window.getGameConfig(this.onGameConfig)
    }

    onGameConfig = (event) => {
        this.config.redPlayer = event.redPlayer
        this.config.blackPlayer = event.blackPlayer
        this.config.preplaySequence = event.preplaySequence
        this.onReady()
    }

    onReady = () => {
        this._measureLayout()
        this.plate.useInputs(this.config.redPlayer === PlayerTypes.LOCAL,
            this.config.blackPlayer === PlayerTypes.LOCAL)
        this.plate.usePebbleTextures(this.redPebbleTex, this.blackPebbleTex)
        this.plate.useState(this.state.current)

        this.ticker.add((delta) => {
            PIXI.tweenManager.update()
        })
    }

    onTurn = () => {
        this.state.history.push(this.state.current.clone())

        // TODO: Move over internet or computer
    }

    onRequestedTurnMove = (start, end, pebble) => {
        if (validateStep(start[0], start[1], end[0], end[1])) {
            try {
                this.state.current.step(start[0], start[1], end[0], end[1])
            } catch (e) {
                this._vibratePebble(pebble)
            }
        } else {
            let dir
            let moved
            const animate = Settings.getPreference('animateTraverseMoves')

            try {
                dir = Directions.of(start, end)
                moved = this.state.current.traverse(
                    start[0], start[1], dir, null,
                    true, !animate, true // don't perform if animate required
                )
            } catch (e) {
                this._vibratePebble(pebble)
            }

            if (!dir) return // couldn't find direction

            if (animate && moved) {
                this._animateTraverseSteps(moved, start)
            } else if (!moved) {
                this._vibratePebble(pebble)
            }
        }
    }

    _animateTraverseSteps (steps, start) {
        const intermediate = this.state.current.clone()
        this.plate.useState(intermediate, false)// we'll update plate using onTurn() manually

        let pos = start
        let index = 0

        let progress, finalize // eslint-disable-line

        const doLoop = (loopStepIndex, toFinalize = false) => {
            const pos = steps[loopStepIndex]
            const startPos = loopStepIndex > 0 ? steps[loopStepIndex - 1] : start
            const rot = getLoopRotation(startPos[0], startPos[1], pos[0], pos[1])
            const center = this.plate.coordsFor(rot[0], rot[1])
            const radius = this.plate.cellWidth * rot[4]

            this._loopPebble(center[0], center[1],
                rot[2], rot[3], radius, this.plate.findPebbleAt(...startPos))

            window.setTimeout(toFinalize ? finalize : progress,
                Settings.getPreference('animateTraverseLoopDelay') + 100)
        }

        finalize = () => {
            this.state.current.step(start[0], start[1], pos[0], pos[1], false, true)
            this.plate.useState(this.state.current, true)
        }

        progress = () => {
            intermediate.step(pos[0], pos[1], steps[index][0], steps[index][1], true,
                steps.isCapture)
            pos = steps[index]

            if (!pos.isLoop) { // loops are customly animated!
                this.plate.onTurn()
            }

            if (index !== steps.length - 1) {
                ++index
                if (pos.isLoop) {
                    doLoop(index - 1)
                } else {
                    window.setTimeout(progress, Settings.getPreference('animateTraverseDelay'))
                }
            } else {
                if (steps[index].isLoop) {
                    doLoop(index, true)
                } else {
                    finalize()
                }
            }
        }

        progress()
    }

    _createPebbleSprites (redUri, blackUri, size = 30) {
        const redPebbleSeed = new VectorSprite(redUri)
        const blackPebbleSeed = new VectorSprite(blackUri)
        const filter = new DropShadowFilter({ distance: size / 20, blur: 2, quality: 2, rotation: 90 })
        redPebbleSeed.resize(size)
        blackPebbleSeed.resize(size)
        redPebbleSeed.filters = blackPebbleSeed.filters = [filter]
        redPebbleSeed.x = redPebbleSeed.y = filter.padding
        blackPebbleSeed.x = blackPebbleSeed.y = filter.padding

        const dimen = 2 * filter.padding + size
        const redPebbleTex = PIXI.RenderTexture.create(dimen, dimen)
        const blackPebbleTex = PIXI.RenderTexture.create(dimen, dimen)

        redPebbleSeed.source.onload = () => {
            this.renderer.render(redPebbleSeed, redPebbleTex)
        }
        blackPebbleSeed.source.onload = () => {
            this.renderer.render(blackPebbleSeed, blackPebbleTex)
        }

        this.redPebbleTex = redPebbleTex
        this.blackPebbleTex = blackPebbleTex
    }

    _measureLayout () {
        // Fit & place a square board plate
        this.plate.resize(Math.min(this.screen.width, this.screen.height))
    }

    _loopPebble (cx, cy, startAngle, endAngle, radius, pebble) {
        // ensure mixin
        Object.setPrototypeOf(PIXI.tween.TweenPath.prototype, PIXI.Graphics.prototype)

        const tweenPath = new PIXI.tween.TweenPath()
        const graphics = new PIXI.Graphics()

        graphics.arc(cx, cy, radius, startAngle, endAngle,
            endAngle - startAngle === Math.PI / 2 || endAngle - startAngle === -1.5 * Math.PI)
        tweenPath.polygon.points = graphics.currentPath.points
        tweenPath.dirty = false
        tweenPath.parsePoints = () => { return tweenPath }

        try {
            if (tweenPath.polygon.points.length <= 100) {
                throw new Error('Invlia parse')
            }
        } catch (e) {

        }

        const tween = PIXI.tweenManager.createTween(pebble)
        tween.path = tweenPath
        tween.time = Settings.getPreference('animateTraverseLoopDelay')

        tween.start()
    }

    _vibratePebble (pebble) {
        const tween = PIXI.tweenManager.createTween(pebble)
        const tween2 = PIXI.tweenManager.createTween(pebble)
        const ix = pebble.x; const iy = pebble.y
        tween.time = 200
        tween2.time = 100
        tween.from({ x: ix - 5, y: iy - 5 })
            .to({ x: ix + 2.5, y: iy + 2.5 })
        tween2.from({ x: ix + 2.5, y: iy + 2.5 })
            .to({ x: ix, y: iy })
        tween.chain(tween2)

        tween.start()
    }

    static getPebbleUris (theme = 'lined-pebbles') {
        const base = `img/${theme}`
        return [base + '/red.svg', base + '/black.svg']
    }
}
