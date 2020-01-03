cordova.define("com.zexfer.surakarta.plugins.gameconfig.GameConfig", function(require, exports, module) {
window.getGameConfig = function (callback) {
    console.log('getGameConfig')
    window.cordova.exec(callback,
        () => { throw new Error("Couldn't get game config parameters") },
        'GameConfig',
        'default',
        [])
}

});
