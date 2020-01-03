window.getGameConfig = function (callback) {
    window.cordova.exec(callback,
        () => { throw new Error("Couldn't get game config parameters") },
        'GameConfig',
        'default',
        [])
}
