const PIXI = require('pixi.js')
window.PIXI = PIXI
const { SurakartaPixi } = require('./gl-app/SurakartaPixi')
const { UIBridge } = require('./bridge')
const Portrait = require('./ui/index.portrait.js')

window.onload = function () {
    document.addEventListener('deviceready', () => {
        window.screen.orientation.lock('portrait')
    })

    /**
     * @global window.$bridge
     * @type {UIBridge}
     *
     * Bridge used to communicate requirements between the gl-app module
     * and the React UI.
     */
    window.$bridge = new UIBridge()
        /**
         * @global window.$bridge.eventStores.turn
         *
         * Fired when it is a player's turn.
         */
        .addEventStore('turn')
        .addEventStore('timersync')
        /**
         * @global window.$bridge.eventStores.orientationscrap
         *
         * Fired on an orientation change causing a full scrap of the
         * UI. The canvas **must** be preserved and resized.
         */
        .addEventStore('orientationscrap')
        /**
         * @global window.$bridge.eventStores.init
         *
         * Fired once to start the UI.
         */
        .addEventStore('init')

    const targetCanvas = document.getElementById('view-target')
    const targetSize = Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight)
    const SurakartaApplication = new SurakartaPixi({
        backgroundColor: 0xffffff,
        view: targetCanvas,
        width: targetSize,
        height: targetSize,
        autoDensity: true
    })

    SurakartaApplication.initialize()
    Portrait.init()
}
