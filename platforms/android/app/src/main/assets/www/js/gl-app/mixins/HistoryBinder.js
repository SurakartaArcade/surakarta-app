/**
 * This mixin handles toggles back & forward through the history of the
 * Surakarta game.
 *
 * It automatically responds to the moveback & movefoward bridge events.
 *
 * @property {object} state.historyBinder
 * @property {number | null} state.historyBinder.page - the current move
 *      being shown, if in history managed state.
 */
const Binder = {
  /**
     * @param {SurakartaPixi} target
     */
  initBinder: function (target) {
    target.state.historyBinder = {
      page: null,
      onBindState: Binder.onBindState.bind(target),
      onUnbindState: Binder.onUnbindState.bind(target),
      moveTo: Binder.moveTo.bind(target)
    }

    window.$bridge.registerListener('moveback', function () {
      if (this.state.historyBinder.page) {
        this.state.historyBinder.moveTo(this.state.historyBinder.page - 1)
      } else {
        this.useState('history')
      }
    }.bind(target))
    window.$bridge.registerListener('moveforward', function () {
      if (this.state.historyBinder.page !== null) {
        this.state.historyBinder.moveTo(this.state.historyBinder.page + 1)
      } else {
        this.normalState()
      }
    }.bind(target))
  },
  onBindState: function (move = this.state.history.length - 1) {
    this.state.historyBinder.page = move
    this.state.historyBinder.moveTo(move)
  },
  onUnbindState: function () {
    // No side effects other than plate state
    this.state.historyBinder.page = null
  },
  moveTo: function (move = this.state.history.length - 1) {
    if (Number.isNaN(move) // occurs when moveback, moveforward invoked first time
    ) {
      move = this.state.history.length - 1
    }

    move = Math.max(0, move)
    console.log('moveTo: ' + move)
    this.state.historyBinder.page = move

    if (move >= this.state.history.length) {
      this.state.historyBinder.page = this.state.history.length - 1 // in case owner-binder = 'history'
      this.normalState()
    } else {
      this.plate.useDisplayOnlyState(this.state.history[move], false) // no auto-update
    }
  }
}

export default Binder
