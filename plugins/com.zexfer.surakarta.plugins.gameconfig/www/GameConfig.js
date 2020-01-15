window.getGameConfig = function (callback) {
    window.cordova.exec(callback,
        () => { throw new Error("Couldn't get game config parameters") },
        'GameConfig',
        'default',
        [])
}

/**
 * Store the completed game in local storage so that the user can later
 * reopen & view it.
 *
 * @param {number} redPlayer - player type for red
 * @param {number} blackPlayer - player type of black
 * @param {string} bundle - the game itself encoded
 */
window.submitCompletedGame = function (redPlayer, blackPlayer, bundle) {
    window.cordova.exec(null,
        () => { console.error(`Error: Could not submit completed game: ${bundle}`) },
        'GameConfig',
        'gamesubmit',
        [redPlayer, blackPlayer, bundle])
}
