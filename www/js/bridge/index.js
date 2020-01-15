import { UIBridge } from './UIBridge'

export { UIBridge }
export default { UIBridge }

/**
 * @typedef {object} BridgeEvent
 * @property {string} event - name of this event
 * @property {object} eventData - data associated with the event
 * @property {Function[]} listeners - listeners on this event
 */

/**
 * TimerSyncEvent
 * @extends BridgeEvent
 * @property {string} eventData.player
 * @property {number} eventData.value
 */

/**
 * TurnEvent
 * @extends BridgeEvent
 * @property {string} eventData.player
 */

/**
 * TimerOutEvent
 * @extends BridgeEvent
 * @property {'red', 'player'} eventData.player
 */

/**
 * @typedef {'timerout', 'gamewon'} EndReason
 */

/**
 * GameOverEvent
 * @extends BridgeEvent
 * @property {string} eventData.winner
 * @property {string} eventData.winnerName
 * @property {boolean} eventData.isDraw
 * @property {EndReason} eventData.reasonType
 * @property {string} eventData.reason
 */
