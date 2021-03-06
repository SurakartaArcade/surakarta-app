import { AppConfig } from '../AppConfig'
import { Bundler as SurakartaBundler } from 'surakarta-store'
import { ComputerDelegate } from './ComputerDelegate'
import { DropShadowFilter } from '@pixi/filter-drop-shadow'
import HistoryBinder from './mixins/HistoryBinder'
import * as PIXI from 'pixi.js'
import PixiTween from 'pixi-tween' // eslint-disable-line
import { Plate } from './Plate'
import { PlayerTypes } from './Constants'
import Settings from './Settings'
import StateBinder from './mixins/StateBinder'
import { Surakarta, validateStep, Directions, getLoopRotation } from 'surakarta'
import { VectorSprite } from './VectorSprite'

/**
 * @param {SurakartaPixi} app -
 * @param {PIXI.DisplayObject} displayObject -
 */
function injectRenderRequired (app, displayObject) {
  displayObject.indicateRenderOnce = app.indicateRenderOnce
}

/**
 * <p>
 * PixiJS application that is custom built, i.e. doesn't extend `PIXI.Application` for
 * managing the Surakarta canvas.
 *
 * <p>
 * This app uses on-demand rendering - renders are done on each tick iff rendering is
 * flagged as required. You cause a re-render to occur atleast once by calling
 * `indicateRenderOnce`. If you need to maintain constant renders, increment the
 * `renderRequired` property: `++app.renderRequired`. Once your component doesn't need
 * constant rendering, you should revert back by decrementing it: `-app.renderRequired`.
 *
 * @implements SK.SurakartaResponder
 */
export class SurakartaPixi {
  constructor (options) {
    this.renderer = PIXI.autoDetectRenderer(options)
    this.view = options.view
    this.stage = new PIXI.Container()
    this.ticker = new PIXI.Ticker()

    // Initialize UI components
    this._createPebbleSprites(...SurakartaPixi.getPebbleUris())
    this.plate = this.stage.addChild(new Plate(this.onRequestedTurnMove))
    injectRenderRequired(this, this.plate) // PebbleDnD will use this.

    // Render only if required
    this.renderRequired = 0 // this is a semaphore - increment to turn on rendering
    this.oneTimeRenderRequired = 0 // subtracted from render-required

    this.ticker.add(this.render)
    this.ticker.start()
    this.indicateRenderOnce()
  }

  get width () {
    return this.view.width
  }

  get height () {
    return this.view.height
  }

  get screen () {
    return this.renderer.screen
  }

  /** Call this before deviceready */
  initialize = () => {
    document.addEventListener('deviceready', this.onDeviceReady, false)
  }

  onDeviceReady = () => {
    window.getGameConfig(this.onGameConfig)
    window.$bridge.fire('init')
  }

  onGameConfig = (event) => {
    // Initialize game state
    this.config = new AppConfig(event)
    this.onReset(true)

    if (event.bundle) {
      this.config.useTrack(event.bundle)
      this.state.ownerBinder = 'history'

      const expandedBundle = SurakartaBundler.unbundle(this.config.bundle)
      const history = expandedBundle

      for (let i = 0; i < history.length; i++) {
        history[i] = Surakarta.fromState(history[i])
      }

      // override game!
      this.state.history = history
    }

    this.stage.interactive = true
    this.stage.on('mousedown', this.normalState)
    this.stage.on('touchstart', this.normalState)

    window.$bridge.inputPlayer = 'black'
    window.$bridge.headless = false

    if (this.config.isOffline) {
      this.onReady()
    } else {
      window.$componentRegistrar
        .requireComponent('skFirebase', this.onReady())
    }
  }

  onReady = () => {
    if (window.$bridge.gameRunning) {
      this.state.player = 'red'

      window.$bridge.registerListener('timerout', this.onTimerOut)
      window.$bridge.registerListener('resign', this.onResign)
      window.$bridge.registerListener('gamestart', this.onReset)

      if (this.config.isLocal) {
        window.$bridge.fire('timersync', { player: undefined, value: 60000 * 5 })
        window.$bridge.fire('turn', { player: 'red' })
      }
    }

    this._measureLayout()

    this.plate.useInputs(this.config.redPlayer === PlayerTypes.LOCAL,
      this.config.blackPlayer === PlayerTypes.LOCAL)
    this.plate.usePebbleTextures(this.redPebbleTex, this.blackPebbleTex)
    this.plate.useState(this.state.current)

    this.ticker.add((delta) => {
      PIXI.tweenManager.update()
    })

    this.normalState() // if owner-binder !== 'normal'
  }

  /**
   * @bridge-binder
   */
  onReset = (noFireEvents) => {
    this.config.revokeTrack()

    this.state = {
      current: new Surakarta(),
      currentCopy: new Surakarta(), // just for initial position in history
      history: [new Surakarta()],
      player: null, // set 'red' in onReady
      activeBinder: 'normal', // | 'history' (before any events are handled, make sure to be in normal manage)
      ownerBinder: 'normal', // default binder state, should be normal for new games
      redPlayer: null,
      blackPlayer: null
    }
    this.state.current.responders[2].push(this)
    this.state.current.on('gameover', this.onGameOver)

    if (this.config.redPlayer === PlayerTypes.COMPUTER) {
      this.state.redPlayer = new ComputerDelegate(this.state.current, 'red')
    }
    if (this.config.blackPlayer === PlayerTypes.COMPUTER) {
      this.state.blackPlayer = new ComputerDelegate(this.state.current, 'black')
    }

    // State binding is dependent on state object, so mixins must be re-instantiated
    StateBinder.initBinder(this)
      .addStateBinder('history', HistoryBinder)

    if (noFireEvents !== true) { // If true, we don't want to do anything with UI/bridge
      console.log('onReset(): noFireEvents !== true')
      this.plate.useState(this.state.current)
      window.$bridge.fire('timersync', { player: undefined, value: 60000 * 5 })
      window.$bridge.fire('turn', { player: 'red' })
    }

    window.$bridge.gameRunning = true
    this.indicateRenderOnce()
  }

  /**
   * Fires a game-over event asynchronously for the timer-out.
   *
   * @bridge-binder
   */
  onTimerOut = () => {
    this.onGameOverSideEffects()
    const player = this.state.current.turnPlayer
    this.onGameOver()

    if (player === 0) { // red
      window.$bridge.fireAsync('gameover', {
        winner: 'red',
        winnerName: 'Red',
        isDraw: false,
        reasonType: 'timerout',
        reason: 'because of the timer'
      })
    } else { // black
      window.$bridge.fireAsync('gameover', {
        winner: 'black',
        winnerName: 'Black',
        isDraw: false,
        reasonType: 'timerout',
        reason: 'because of the timer'
      })
    }
  }

  /**
   * @bridge-binder
   */
  onResign = (event) => {
    this.onGameOverSideEffects()

    if (this.config.bundle) { // are we showing a previous game?
      window.$bridge.fireAsync('gameover', {
        reasonType: 'over',
        reason: ''
      })
      return
    }

    const player = event.eventData.player

    if (player === 'red') {
      window.$bridge.fireAsync('gameover', {
        winner: 'black',
        winnerName: 'Black',
        isDraw: false,
        reasonType: 'resign',
        reason: 'because of resignation'
      })
    } else { // black
      window.$bridge.fireAsync('gameover', {
        winner: 'red',
        winnerName: 'Red',
        isDraw: false,
        reasonType: 'timerout',
        reason: 'because of resignation'
      })
    }
  }

  /**
   * Side-effects of any game-over.
   */
  onGameOverSideEffects () {
    this.normalState()

    this.plate.interactiveChildren = false
    window.$bridge.gameRunning = false

    if (!this.config.bundle) {
      window.submitCompletedGame(// plugin: GameConfig
        this.config.redPlayer,
        this.config.blackPlayer,
        SurakartaBundler.bundle([...this.state.history, this.state.current])
      )
    }
  }

  /**
   * Responds to surakarta's gameover event emittance.
   *
   * @responder
   */
  onGameOver = () => {
    this.onGameOverSideEffects()

    window.$bridge.fire('gameover', {
      winner: this.state.current.turnPlayerColor,
      winnerName: this.state.current.turnPlayerColor === 'red' ? 'Red' : 'Black',
      isDraw: false,
      reasonType: 'gamewon',
      reason: 'by checkmate'
    })
  }

  /**
   * @responder
   */
  onTurn = () => {
    this.state.history.push(this.state.currentCopy) // current-copy is actually old
    this.state.currentCopy = this.state.current.clone()

    this.state.player = this.state.current.turnPlayer === 0 ? 'red' : 'black'
    console.log('onTurn ' + this.state.player)
    window.$bridge.turnPlayer = this.state.player
    window.$bridge.fire('turn', { player: this.state.player })

    // TODO: Move over internet or computer
  }

  onRequestedTurnMove = (start, end, pebble) => {
    if (validateStep(start[0], start[1], end[0], end[1])) {
      try {
        this.state.current.step(start[0], start[1], end[0], end[1])
      } catch (e) {
        this._vibratePebble(pebble)
        return
      }

      this.indicateRenderOnce()
    } else {
      let dir
      let moved
      const animate = Settings.getPreference('animateTraverseMoves')

      try {
        dir = Directions.of(start, end)
        moved = this.state.current.traverse(
          start[0], start[1], dir, null,
          true, !animate, true // don't perform if animate required
        )
      } catch (e) {
        this._vibratePebble(pebble)
        return
      }

      if (!dir) return // couldn't find direction

      if (animate && moved) {
        this._animateTraverseSteps(moved, start)
      } else if (!moved) {
        console.log("Warning: Didn't move.")
        this._vibratePebble(pebble)
      }
    }
  }

  indicateRenderOnce = () => {
    this.renderRequired++
    this.oneTimeRenderRequired++
  }

  render = () => {
    if (this.renderRequired > 0) {
      if (this.config.debugRenders) {
        console.log('Renders-required: ' + this.renderRequired)
        console.log('Persistent-renders: ' + (this.renderRequired - this.oneTimeRenderRequired))
      }

      this.renderRequired -= this.oneTimeRenderRequired
      this.oneTimeRenderRequired = 0

      if (this.renderRequired < 0) {
        console.error('Render required went below 0, correcting')
        this.renderRequired = 0 // safety
      }

      this.renderer.render(this.stage)
    }
  }

  _animateTraverseSteps (steps, start) {
    const intermediate = this.state.current.clone()
    this.plate.useState(intermediate, false)// we'll update plate using onTurn() manually

    let pos = start
    let index = 0

        let progress, finalize // eslint-disable-line

    const doLoop = (loopStepIndex, toFinalize = false) => {
      const pos = steps[loopStepIndex]
      const startPos = loopStepIndex > 0 ? steps[loopStepIndex - 1] : start
      const rot = getLoopRotation(startPos[0], startPos[1], pos[0], pos[1])
      const center = this.plate.coordsFor(rot[0], rot[1])
      const radius = this.plate.cellWidth * rot[4]

      this._loopPebble(center[0], center[1],
        rot[2], rot[3], radius, this.plate.findPebbleAt(...startPos))

      window.setTimeout(toFinalize ? finalize : progress,
        Settings.getPreference('animateTraverseLoopDelay') + 100)
    }

    finalize = () => {
      this.state.current.step(start[0], start[1], pos[0], pos[1], false, true)
      this.plate.useState(this.state.current, true)

      this.indicateRenderOnce()
    }

    progress = () => {
      intermediate.step(pos[0], pos[1], steps[index][0], steps[index][1], true,
        steps.isCapture)
      pos = steps[index]

      if (!pos.isLoop) { // loops are customly animated!
        this.plate.onTurn()
        this.indicateRenderOnce()
      }

      if (index !== steps.length - 1) {
        ++index
        if (pos.isLoop) {
          doLoop(index - 1)
        } else {
          window.setTimeout(progress, Settings.getPreference('animateTraverseDelay'))
        }
      } else {
        if (steps[index].isLoop) {
          doLoop(index, true)
        } else {
          finalize()
        }
      }
    }

    this.plate.interactiveChildren = false
    progress()
  }

  _createPebbleSprites (redUri, blackUri, size = 30) {
    const redPebbleSeed = new VectorSprite(redUri)
    const blackPebbleSeed = new VectorSprite(blackUri)
    const filter = new DropShadowFilter({ distance: size / 20, blur: 2, quality: 2, rotation: 90 })
    redPebbleSeed.resize(size)
    blackPebbleSeed.resize(size)
    redPebbleSeed.filters = blackPebbleSeed.filters = [filter]
    redPebbleSeed.x = redPebbleSeed.y = filter.padding
    blackPebbleSeed.x = blackPebbleSeed.y = filter.padding

    const dimen = 2 * filter.padding + size
    const redPebbleTex = PIXI.RenderTexture.create(dimen, dimen)
    const blackPebbleTex = PIXI.RenderTexture.create(dimen, dimen)

    redPebbleSeed.source.onload = () => {
      this.renderer.render(redPebbleSeed, redPebbleTex)
      this.indicateRenderOnce()
    }
    blackPebbleSeed.source.onload = () => {
      this.renderer.render(blackPebbleSeed, blackPebbleTex)
      this.indicateRenderOnce()
    }

    this.redPebbleTex = redPebbleTex
    this.blackPebbleTex = blackPebbleTex
  }

  _measureLayout () {
    // Fit & place a square board plate
    this.plate.resize(Math.min(this.screen.width, this.screen.height))
    this.indicateRenderOnce()
  }

  _loopPebble (cx, cy, startAngle, endAngle, radius, pebble) {
    // ensure mixin
    Object.setPrototypeOf(PIXI.tween.TweenPath.prototype, PIXI.Graphics.prototype)

    const tweenPath = new PIXI.tween.TweenPath()
    const graphics = new PIXI.Graphics()

    graphics.arc(cx, cy, radius, startAngle, endAngle,
      endAngle - startAngle === Math.PI / 2 || endAngle - startAngle === -1.5 * Math.PI)
    tweenPath.polygon.points = graphics.currentPath.points
    tweenPath.dirty = false
    tweenPath.parsePoints = () => { return tweenPath }

    const tween = PIXI.tweenManager.createTween(pebble)
    tween.path = tweenPath
    tween.time = Settings.getPreference('animateTraverseLoopDelay')

    const revert = () => { --this.renderRequired }
    const chainTweenHack = {
      addTo: function () {},
      start: revert
    }

    tween.chain(chainTweenHack) // hack since we just need to stop renders

    ++this.renderRequired
    tween.start()
  }

  _vibratePebble (pebble) {
    const tween = PIXI.tweenManager.createTween(pebble)
    const tween2 = PIXI.tweenManager.createTween(pebble)
    const ix = pebble.x; const iy = pebble.y
    tween.time = 200
    tween2.time = 100
    tween.from({ x: ix - 5, y: iy - 5 })
      .to({ x: ix + 2.5, y: iy + 2.5 })
    tween2.from({ x: ix + 2.5, y: iy + 2.5 })
      .to({ x: ix, y: iy })
    tween.chain(tween2)

    const revert = () => { --this.renderRequired }
    const chainTweenHack = {
      addTo: function () {},
      start: revert
    }
    tween2.chain(chainTweenHack) // hack since we just need to stop renders

    ++this.renderRequired
    tween.start()
  }

  static getPebbleUris (theme = 'lined-pebbles') {
    const base = `img/${theme}`
    return [base + '/red.svg', base + '/black.svg']
  }
}
