const PIXI = require('pixi.js')
window.PIXI = PIXI
const { SurakartaPixi } = require('./gl-app/SurakartaPixi')
const { UIBridge } = require('./bridge')
const Portrait = require('./ui/index.portrait.js')

function buildBridge () {
    /**
     * Bridge used to communicate requirements between the gl-app module
     * and the React UI.
     *
     * @global window.$bridge
     * @type {UIBridge}
     */
    window.$bridge = new UIBridge()
        /* Fired when it is a player's turn. @see TurnEvent */
        .addEventStore('turn')
        /* Fired when the timers need to be synchronized with a timer value. @see TimerSyncEvent */
        .addEventStore('timersync')
        /* Fired by the UI when the currently running timer runs out. */
        .addEventStore('timerout')
        /* Fired by SurakartaPixi when game is over. @see GameOverEvent */
        .addEventStore('gameover')
        /** Fired by the UI when player resigns */
        .addEventStore('resign')
        /* Fired by the UI when player wants to start new game! */
        .addEventStore('gamestart')
        .addEventStore('moveback')
        .addEventStore('moveforward')
        /* Fired on an orientation change causing a full scrap of the
         * UI. The canvas **must** be preserved and resized.
         */
        .addEventStore('orientationscrap')
        /* Fired once to start the UI. */
        .addEventStore('init')
}

window.onload = function () {
    document.addEventListener('deviceready', () => {
        window.screen.orientation.lock('portrait')
    })

    buildBridge()

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
