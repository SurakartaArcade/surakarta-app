const et = require('elementtree')
const fs = require('fs')

const MANIFEST_FILE = '/Users/shukantpal/CordovaProjects/Surakarta/platforms/android/app/src/main/AndroidManifest.xml'

/**
 * Add main action intent from `SurkartaActivity`.
 *
 * @param {ElementTree} manifestTree
 */
function addMainAction (manifestTree) {
    const intentFilterElement = manifestTree.find("./application/activity[@android:name='.SurakartaActivity']")
        .getchildren()[0]

    const mainActionElement = et.SubElement(intentFilterElement, 'action')
    mainActionElement.set('android:name', 'android.intent.action.MAIN')
}

module.exports = function () {
    const manifestTree = et.parse(fs.readFileSync(MANIFEST_FILE, 'utf8'))
    addMainAction(manifestTree)

    fs.writeFileSync(MANIFEST_FILE, manifestTree.write())
}
