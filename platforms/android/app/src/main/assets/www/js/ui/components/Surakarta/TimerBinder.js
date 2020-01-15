/**
 * This mixin manages binding a component with the UI bridge's timer signals. It
 * should be used with React components **only** as it references `this.setState`.
 *
 * @property {boolean} timerRunning - whether a timer is ticking
 * @property {number | null} timerBase - last time when a `setTimeout` was called
 * @property {number} timerValue - value the UI should display as time left (if -1, not set)
 * @property {number} timerToken - value returned by the last `setTimeout`
 * @method startTimer
 * @method stopTimer
 */
const Binder = {
    /**
     * @param {React.Component} target - mixin target
     * @param {boolean} inputPlayer - whether UI is for input player or for other
     */
    initBinder: function (target, inputPlayer = true) {
        target.isInputPlayerUI = inputPlayer

        target.timerRunning = false
        target.timerBase = null // @see startTimer
        target.timerValue = -1
        target.timerToken = null

        target.registerTimerListeners = Binder.registerTimerListeners
        target.unregisterListener = Binder.unregisterTimerListeners
        target.startTimer = Binder.startTimer
        target.iterateTimer = Binder.iterateTimer
        target.stopTimer = Binder.stopTimer

        // callback methods
        target.onTurn = Binder.onTurn.bind(target)
        target.onTimerSync = Binder.onTimerSync.bind(target)
        target.onTimer = Binder.onTimer.bind(target)
    },
    registerTimerListeners: function () {
        window.$bridge.registerListener('turn', this.onTurn)
        window.$bridge.registerListener('timersync', this.onTimerSync)
    },
    unregisterTimerListeners: function () {
        window.$bridge.unregisterListener('turn', this.onTurn)
        window.$bridge.unregisterListener('timersync', this.onTimerSync)
    },
    startTimer: function () {
        if (this.timerRunning) {
            return
        }

        this.timerRunning = true
        this.timerBase = performance.now()
        this.iterateTimer()
    },
    iterateTimer: function () {
        this.timerToken = window.setTimeout(this.onTimer, this.timerValue > 10000 ? 1000 : 100)
    },
    stopTimer: function () {
        if (this.timerToken === null) {
            return
        }

        window.clearTimeout(this.timerToken)
        this.timerToken = null
        this.timerRunning = false
    },
    onTurn: function (event) {
        const data = event.data

        if ((data.player === window.$bridge.inputPlayer) === this.isInputPlayerUI) {
            this.startTimer()
        } else {
            this.stopTimer()
        }

        this.setState({ timerRunning: this.timerRunning }) // causes re-render
    },
    onTimerSync: function (event) {
        const data = event.data

        if (!data.player || (data.player === window.$bridge.inputPlayer) === this.isInputPlayerUI) {
            this.timerValue = data.value
            this.setState({ timerValue: this.timerValue })
        }
    },
    onTimer: function () {
        const now = performance.now()
        const elapsedTime = Math.round(now - this.timerBase)

        this.timerValue -= elapsedTime
        this.timerBase = now

        this.setState({ timerValue: this.timerValue })

        if (this.timerRunning && this.timerValue > 0) {
            this.iterateTimer()
        } else if (this.timerRunning) {
            this.timerValue = 0
            window.$bridge.fire('timerout', {
                player: this.isInputPlayerUI ? window.$bridge.inputPlayer : window.$bridge.otherPlayer
            })

            this.stopTimer()
        }
    }
}

export default Binder
