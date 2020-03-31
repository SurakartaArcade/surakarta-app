const et = require('elementtree')
const fs = require('fs')

/*
 * cordova-deep-links adds stuff to the Android Manifest. For Surakarta, that stuff
 * goes in the SurakartaActivity. The problem is that the plugin targets the first MAIN/LAUNCHER
 * activity. Our main/launcher activity isn't the cordova activity. That's why the first
 * activity in the manifest is SurkartaActivity.
 *
 * before_prepare adds a main intent action & launcher category to SurakartaActivity
 * so that cordova-deep-links works on it. after_prepare will subsequently remove
 * it when we're done.
 */

const MANIFEST_FILE = '/Users/shukantpal/CordovaProjects/Surakarta/platforms/android/app/src/main/AndroidManifest.xml'

module.exports = function () {
  const manifestTree = et.parse(fs.readFileSync(MANIFEST_FILE, 'utf8'))

  // Find SurakartaActivity and remove all children (intent-filters)
  const surakartaActivityElement = manifestTree
    .find("./application/activity[@android:name='.SurakartaActivity']")
  surakartaActivityElement._children = []

  // Add an intent-filter
  const intentFilterElement = et.SubElement(surakartaActivityElement, 'intent-filter')

  // MAIN
  const mainActionElement = et.SubElement(intentFilterElement, 'action')
  mainActionElement.set('android:name', 'android.intent.action.MAIN')

  // LAUNCHER
  const launchActionElement = et.SubElement(intentFilterElement, 'category')
  launchActionElement.set('android:name', 'android.intent.category.LAUNCHER')

  console.error(manifestTree.write())
  fs.writeFileSync(MANIFEST_FILE, manifestTree.write())
}
