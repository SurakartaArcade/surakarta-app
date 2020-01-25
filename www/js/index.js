// Enabling logging is first priority!
const { log, LogLevel } = require('missionlog')

log.init({
    skPixi: 'INFO',
    skView: 'INFO',
    skReact: 'INFO',
    skFirebase: 'INFO',
    skBridge: 'INFO',
    skComponentRegistrar: 'INFO'
},
(level, tag, msg, params) => {
    const prefix = `${level}: [${tag}]`
    switch (level) {
    case LogLevel.ERROR:
        console.error(prefix, msg, ...params)
        break
    case LogLevel.WARN:
        console.warn(prefix, msg, ...params)
        break
    case LogLevel.INFO:
        console.info(prefix, msg, ...params)
        break
    }
});

// fetch for file:// (from https://github.com/github/fetch/pull/92)
(function () {
    var nativeFetch = window.fetch
    if (nativeFetch) {
        const a = document.createElement('a')
        window.fetch = function (url) {
            a.href = url
            const full_url = a.href // eslint-disable-line
            if (full_url.indexOf('file:') === 0) {
                return new Promise(function (resolve, reject) {
                    var xhr = new XMLHttpRequest()
                    xhr.onload = function () {
                        resolve(new Response(xhr.responseText, { status: xhr.status }))
                    }
                    xhr.onerror = function (err) {// eslint-disable-line
                        reject(new TypeError('Local request failed'))
                    }
                    xhr.open('GET', url)
                    xhr.send(null)
                })
            } else {
                return nativeFetch.call(this, Array.prototype.slice.apply(arguments))
            }
        }
    }
})()

const PIXI = require('pixi.js')
window.PIXI = PIXI
const { SurakartaPixi } = require('./gl-app/SurakartaPixi')
const { SurakartaBridge } = require('./bridge')
const Portrait = require('./ui/index.portrait.js')
const ComponentRegistrar = require('./ComponentRegistrar').ComponentRegistrar

window.$componentRegistrar = ComponentRegistrar

function buildBridge () {
    /**
     * Bridge used to communicate requirements between the gl-app module
     * and the React UI.
     *
     * @global window.$bridge
     * @type {UIBridge}
     */
    window.$bridge = new SurakartaBridge()
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
