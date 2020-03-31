const et = require('elementtree')
const fs = require('fs')

const MANIFEST_FILE = '/Users/shukantpal/CordovaProjects/Surakarta/platforms/android/app/src/main/AndroidManifest.xml'

/**
 * Remove main action intent from `SurkartaActivity`.
 *
 * @param {ElementTree} manifestTree
 */
function stripMainAction (manifestTree) {
    const intentFilterElement = manifestTree.find("./application/activity[@android:name='.SurakartaActivity']")
        .getchildren()[0]
    intentFilterElement.remove(intentFilterElement.getchildren()[1])
}

function hey () {
    const manifestTree = et.parse(fs.readFileSync(MANIFEST_FILE, 'utf8'))
    stripMainAction(manifestTree)
    fs.writeFileSync(MANIFEST_FILE, manifestTree.write())
}

module.exports = hey

hey()
