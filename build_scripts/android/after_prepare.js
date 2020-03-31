const et = require('elementtree')
const fs = require('fs')

const MANIFEST_FILE = '/Users/shukantpal/CordovaProjects/Surakarta/platforms/android/app/src/main/AndroidManifest.xml'

/**
 * after_prepare removes the first intent action (added by before_prepare - MAIN)
 */
function main () {
  const manifestTree = et.parse(fs.readFileSync(MANIFEST_FILE, 'utf8'))
  const surakartaActivityElement = manifestTree.find("./application/activity[@android:name='.SurakartaActivity']")

  // Remove first intent-filter (added by before_prepare having MAIN/LAUNCHER)
  surakartaActivityElement.remove(surakartaActivityElement.getchildren()[0])

  fs.writeFileSync(MANIFEST_FILE, manifestTree.write())
}

module.exports = main

main() // we're running this from "npm run prepare" so.
