const PIXI = require('pixi.js')
window.PIXI = PIXI

const { SurakartaPixi } = require('./SurakartaPixi')

window.onload = function () {
    const targetCanvas = document.getElementById('view-target')
    const SurakartaApplication = new SurakartaPixi({
        backgroundColor: 0xffffff,
        view: targetCanvas,
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        autoDensity: true
    })

    SurakartaApplication.initialize()
}
