cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.zexfer.surakarta.plugins.gameconfig.GameConfig",
      "file": "plugins/com.zexfer.surakarta.plugins.gameconfig/www/GameConfig.js",
      "pluginId": "com.zexfer.surakarta.plugins.gameconfig",
      "clobbers": [
        "cordova.plugins.GameConfig"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-webpack": "0.4.7",
    "com.zexfer.surakarta.plugins.gameconfig": "1.0.0"
  };
});