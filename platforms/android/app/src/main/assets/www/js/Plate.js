import { BLACK_PLAYER, RED_PLAYER } from 'surakarta'
import * as PIXI from 'pixi.js'
import VectorSprite from './VectorSprite'

const PLATE_PADDING = 0.6 / 9.6 // measured amount of % padding in the board vector images!

/**
 * Manages drag-and-drop state.
 * @private
 * @implements SurakartaResponder
 */
class PebbleDnD {
    constructor (plate) {
        this.plate = plate
    }

    onGrab = (event) => {
        this.activePebble = event.target
        this.startPosition = [...this.activePebble.platePosition]
        this.currentCoords = [this.activePebble.x, this.activePebble.y]
    }

    onTranslate = (event) => {
        const pos = event.data.getLocalPosition(this.plate)
        this.currentCoords = [pos.x, pos.y]
    }

    onRelease = (event) => {
        if (!this.activePebble) {
            console.error('PebbleDnD: onRelease() called without active pebble')
            return
        }

        const endPosition = this.plate.nearestPlatePositionFor(...this.currentCoords)

        // Notify
        this.plate.onDnDInput(this.startPosition, endPosition, this.activePebble)
        // Cleanup
        this.startPosition = null
        this.activePebble = null
        this.currentCoords = null
    }

    registerPebble (pebble) {
        pebble
            .on('mousedown', this.onGrab)
            .on('touchstart', this.onGrab)
            .on('mouseup', this.onRelease)
            .on('mouseupoutside', this.onRelease)
            .on('touchend', this.onRelease)
            .on('touchendoutside', this.onRelease)
            .on('mousemove', this.onTranslate)
            .on('touchmove', this.onTranslate)
    }
}

/**
 * Manages the UI state of a Surkarta board.
 */
export class Plate extends VectorSprite {
    constructor (redPebbleTex, blackPebbleTex, callback) {
        super('img/Board.svg')
        this.dnd = new PebbleDnD(this)
        this.userCallback = callback
        this.usePebbleTextures(redPebbleTex, blackPebbleTex)
    }

    usePebbleTextures (red, black) {
        while (this.children.length > 0) {
            this.removeChild(this.children[0])
        }
        if (this.redPebblePool) {
            for (let i = 0; i < this.redPebblePool.length; i++) {
                this.redPebblePool[i].destroy()
            }
            for (let i = 0; i < this.blackPebblePool.length; i++) {
                this.blackPebblePool[i].destroy()
            }
        }

        this.redPebbleTex = red
        this.blackPebbleTex = black
        this.pebbleDimens = [red.width, red.height] // black expected same dimens

        this.redPebblePool = new Array(12)
        this.blackPebblePool = new Array(12)

        for (let i = 0; i < 12; i++) {
            this.redPebblePool[i] = new PIXI.Sprite(red)
            this.blackPebblePool[i] = new PIXI.Sprite(black)
            this.redPebblePool[i].interactive = true
            this.blackPebblePool[i].interactive = true

            this.dnd.registerPebble(this.redPebblePool[i])
            this.dnd.registerPebble(this.blackPebblePool[i])
        }

        if (this.state) { this.useState(this.state) }
    }

    useState (state, autoUpdate = true, refresh = false) {
        if (this.state && !refresh) {
            const index = this.state.responders[2].indexOf(this)
            if (index > 0) {
                this.state.responders[2].splice(index, 1)
            }
        }

        // Remove all positioned children!
        while (this.children.length > 0) {
            const child = this.removeChild(this.children[0])
            if (child.texture === this.redPebbleTex) {
                this.redPebblePool.push(child)
            } else {
                this.blackPebblePool.push(child)
            }
        }

        const padX = PLATE_PADDING * this.width
        const padY = PLATE_PADDING * this.height
        const cellX = (this.width - 2 * padX) / 9
        const cellY = (this.height - 2 * padY) / 9

        state.forEach((pebble, r, c) => {
            let sprite
            if (pebble === RED_PLAYER) {
                sprite = this.redPebblePool.pop()
            } else if (pebble === BLACK_PLAYER) {
                sprite = this.blackPebblePool.pop()
            }

            if (sprite) {
                sprite.platePosition = [r, c]
                sprite.x = padX + (c + 2) * cellX - sprite.width * 0.5
                sprite.y = padY + (r + 2) * cellY - sprite.height * 0.5
                this.addChild(sprite)
            }
        })

        if (autoUpdate && !refresh) {
            state.responders[2].push(this)
        }

        this.state = state
    }

    onTurn () {
        this.useState(this.state, true, true)
    }

    nearestPlatePositionFor (x, y) {
        const padX = PLATE_PADDING * this.width
        const padY = PLATE_PADDING * this.height
        const cellX = (this.width - 2 * padX) / 9
        const cellY = (this.height - 2 * padY) / 9
        return [Math.round(((y - padY + this.pebbleDimens[1] * 0.5) / cellY) - 0.5) - 2,
            Math.round(((x - padX + this.pebbleDimens[0] * 0.5) / cellX) - 0.5) - 2]
    }

    coordsFor (r, c) {
        const padX = PLATE_PADDING * this.width
        const padY = PLATE_PADDING * this.height
        const cellX = (this.width - 2 * padX) / 9
        const cellY = (this.height - 2 * padY) / 9
        return [padX + (c + 2) * cellX - this.pebbleDimens[0] * 0.5,
            padY + (r + 2) * cellY - this.pebbleDimens[1] * 0.5]
    }

    onDnDInput (startPosition, endPosition, activePebble) {
        this.userCallback(startPosition, endPosition, activePebble)
    }
}

export default Plate
