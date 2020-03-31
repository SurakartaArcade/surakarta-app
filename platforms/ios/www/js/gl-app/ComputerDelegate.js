import { play } from 'surakarta-ai'
import SK, { RED_PLAYER, BLACK_PLAYER } from 'surakarta'
import { WorkerPortal } from '../WorkerPortal'

/**
 * Delegates computer turns to the analysis/ai library.
 *
 * @class
 */
export class ComputerDelegate {
  /**
   * @param {SK.Surakarta} surakarta - game instance
   * @param {number} player - computer player id
   */
  constructor (surakarta, player) {
    this.surakarta = surakarta
    this.player = player
    this.playerId = player === 'red' ? RED_PLAYER : BLACK_PLAYER

    window.$bridge.registerListener('turn', this.onTurn)
    WorkerPortal.analysis.onmessage = this.onPlaySuggested
  }

  /**
   * @param {TurnEvent} event
   */
  onTurn = (event) => {
    if (event.eventData.player !== this.player) {
      return
    }

    console.log('onTurn')
    setTimeout(() => WorkerPortal.analysis.postMessage(['suggestPlay', this.surakarta.clone()]), 0)
  }

  /**
   * @param {TurnEvent} event
   */
  onPlaySuggested = (event) => {
    const [move] = event.data
    console.log(move)
    console.log('--move')

    this.surakarta.step(
      move.srcRow,
      move.srcColumn,
      move.dstRow,
      move.dstColumn,
      false,
      move.isAttack
    )
  }
}
