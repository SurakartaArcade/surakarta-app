/**
 * <p>
 * Mixin that allows you to handle state-managment features. The gl-app's state
 * can be managed by mixins or, by default, the `SurakartaPixi` app itself. To
 * toggle b/w those managers, you should use this mixin.
 *
 * State-based mixins are allowed to register to bridge events and autmotically
 * activate themselves.
 *
 * @method addStateBinder
 * @method useState
 * @method normalState
 */
const Binder = {
    /**
     * @param {SurakartaPixi} target
     */
    initBinder: function (target) {
        target.addStateBinder = Binder.addStateBinder.bind(target)
        target.useState = Binder.useState.bind(target)
        target.normalState = Binder.normalState.bind(target)
        target.state.activeBinder = 'normal'
        return target
    },
    addStateBinder: function (name, binder) {
        if (!binder.onBindState) {
            throw new Error('Binder/mixin should have an onBindState method')
        }
        if (!binder.onUnbindState) {
            throw new Error('Binder/mixin should have an onUnbindState method')
        }

        binder.initBinder(this)
        return this
    },
    useState: function (name, ...params) {
        if (name === this.state.activeBinder) {
            return
        }
        if (name === 'normal' || this.state.activeBinder !== 'normal') {
            this.normalState(true) // go to normal even if owner-binder not normal
        }

        console.log(`Use state manager: ${name}, replacing ${this.state.activeBinder}`)

        this.state.activeBinder = name
        name += 'Binder'
        this.state[name].onBindState(...params)
    },
    normalState: function (forceNormal = false) {
        if (!forceNormal && this.state.ownerBinder && this.state.ownerBinder !== 'normal') {
            this.useState(this.state.ownerBinder)
            return
        }

        if (this.state.activeBinder === 'normal') {
            return
        }

        this.state[this.state.activeBinder + 'Binder'].onUnbindState()
        this.state.activeBinder = 'normal'

        console.log('Back to normal state')

        this.plate.useState(this.state.current)

        if (!window.$bridge.gameRunning) {
            this.plate.interactiveChildren = false
        }
    }
}

export default Binder
