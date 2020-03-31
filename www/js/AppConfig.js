import { MODES } from './gl-app/Constants'

const debugConfig = {
    debugRenders: false,
    debugBridge: false
}

/**
 * Configuration wrapper around the one passed by game-config
 */
export class AppConfig {
    /**
     * @param {object} config - config object passed by game-config plugin
     * @param {number} config.redPlayer - player source of red
     * @param {number} config.blackPlayer - player source of black
     * @param {number} config.mode - online/offline mode
     * @param {Array<string>} config.preplaySequence - sequence of moves to play before
     *      first game starts.
     */
    constructor (config) {
        /**
         * Player source for red
         * @member {number}
         */
        this.redPlayer = config.redPlayer

        /**
         * Player source for black
         * @member {number}
         */
        this.blackPlayer = config.blackPlayer

        /**
         * Online/offline mode
         * @member {number}
         */
        this.mode = config.mode

        /**
         * Array of moves to play as first game starts
         * @member {Array<string>}
         */
        this.preplaySequence = config.preplaySequence

        /**
         * Predefined game track, if present
         * @member {string}
         */
        this.bundle = null

        console.log(this.mode)

        Object.assign(this, debugConfig)
    }

    /** @returns {boolean} */
    get isLocal () {
        return this.mode === MODES.OFFLINE
    }

    /** @returns {boolean} */
    get isOffline () {
        return this.mode === MODES.OFFLINE
    }

    /** @returns {boolean} */
    get isOnline () {
        return this.mode === MODES.ONLINE
    }

    /**
     * Use a predefined game instead of allowing the user to play.
     * @param {string} bundle
     */
    useTrack (bundle) {
        this.bundle = bundle
    }

    /**
     * Stop using the predefined game.
     */
    revokeTrack () {
        this.bundle = null
    }
}

export default AppConfig
