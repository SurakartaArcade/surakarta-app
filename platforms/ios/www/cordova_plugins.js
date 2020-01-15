cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-screen-orientation.screenorientation",
      "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
      "pluginId": "cordova-plugin-screen-orientation",
      "clobbers": [
        "cordova.plugins.screenorientation"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "cordova.exec"
      ]
    },
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
    "cordova-plugin-screen-orientation": "3.0.2",
    "cordova-plugin-ionic-webview": "4.1.3",
    "com.zexfer.surakarta.plugins.gameconfig": "1.0.0"
  };
});