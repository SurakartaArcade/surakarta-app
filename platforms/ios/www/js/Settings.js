const defaultSettings = {
    animateTraverseMoves: true,
    animateTraverseDelay: 500,
    animateTraverseLoopDelay: 500
}

export default {
    getSettings: function () {
        // TODO: Integrate native to get settings
        return defaultSettings
    },
    getPreference: function (string) {
        return defaultSettings[string]
    }
}
