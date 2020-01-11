import * as PIXI from 'pixi.js'

/**
 *
 */
export class VectorSprite extends PIXI.Sprite {
    constructor (url, onload) {
        const source = new Image()
        const globalUrl = url
        const texture = new PIXI.Texture(new PIXI.BaseTexture(source))

        source.src = globalUrl
        source.onload = onload
        super(texture)

        this.source = source
        this.url = globalUrl
    }

    get naturalWidth () {
        return this.texture.baseTexture.realWidth
    }

    set naturalWidth (value) {
        this.source.width = value
        this.texture.baseTexture.resource.resize(value, this.height)
    }

    get naturalHeight () {
        return this.texture.baseTexture.realHeight
    }

    set naturalHeight (value) {
        this.source.height = value
        this.texture.baseTexture.resource.resize(this.width, value)
    }

    resize (width, height = width) {
        this.source.width = width
        this.source.height = height
        this.texture.baseTexture.resource.resize(width, height)
    }
}

export default VectorSprite
