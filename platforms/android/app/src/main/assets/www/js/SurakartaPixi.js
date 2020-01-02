import { DropShadowFilter } from '@pixi/filter-drop-shadow'
import * as PIXI from 'pixi.js'
import PixiTween from 'pixi-tween' // eslint-disable-line
import Plate from './Plate'
import { Surakarta, validateStep, Directions } from 'surakarta'
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
        this.plate = this.stage.addChild(new Plate(
            this.redPebbleTex,
            this.blackPebbleTex,
            this.onRequestedTurnMove))

        // Initialize game state
        this.state = {
            current: new Surakarta(),
            history: [new Surakarta()]
        }
        this.state.current.responders[2].push(this)
    }

    /** Call this before deviceready */
    initialize = () => {
        document.addEventListener('deviceready', this.onDeviceReady, false)
    }

    onDeviceReady = () => {
        this._measureLayout()
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

            try {
                dir = Directions.of(start, end)
            } catch (e) {
                this._vibratePebble(pebble)
            }

            console.log(dir)
            const moved = this.state.current.traverse(
                start[0], start[1], dir, null,
                true, true
            )

            if (moved) {
                console.log('okay')
            } else {
                console.log('cant')
            }
        }
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
