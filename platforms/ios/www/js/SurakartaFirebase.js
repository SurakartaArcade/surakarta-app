import firebase from 'firebase/app'
import { firebaseConfig } from './firebase.config.js' // git-ignored
import { log, tag } from 'missionlog'

import 'firebase/auth'
import 'firebase/analytics'

firebase.initializeApp(firebaseConfig)

export class SurakartaFirebase {
    constructor () {
        this.authProvider = new firebase.auth.GoogleAuthProvider()

        firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
        log.info(tag.skFirebase, 'SurakartaFirebase initialized')
    }

    onAuthStateChanged = (user) => {
        if (!user) {
            log.info(tag.skFirebase, 'User not logged in, initiating sign-in workflow (redirect)')

            firebase.auth().signInWithRedirect(this.authProvider).then(() => {
                return firebase.auth().getRedirectResult()
            }).then(function (result) {
                // This gives you a Google Access Token.
                // You can use it to access the Google API.
                var token = result.credential.accessToken
                // The signed-in user info.
                var user = result.user
                // ...

                console.log(user)
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code
                var errorMessage = error.message

                log.error(tag.skFirebase, `User sign-in error (${errorCode}): ${errorMessage}`)
            })
        }
    }
}

window.$bridge.$firebaseClient = new SurakartaFirebase()

export default SurakartaFirebase
