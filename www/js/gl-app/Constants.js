export const PlayerTypes = {
  LOCAL: 1,
  FIREBASE: 2,
  COMPUTER: 3,
  NOINPUT: 4
}

export const MODES = {
  OFFLINE: 10,
  ONLINE: 11
}

export default {
  ...PlayerTypes,
  PlayerTypes,
  ...MODES,
  MODES
}
