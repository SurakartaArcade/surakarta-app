(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["surakarta-firebase"],{

/***/ "./www/js/SurakartaFirebase.js":
/*!*************************************!*\
  !*** ./www/js/SurakartaFirebase.js ***!
  \*************************************/
/*! exports provided: SurakartaFirebase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurakartaFirebase", function() { return SurakartaFirebase; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase.config.js */ "./www/js/firebase.config.js");
/* harmony import */ var missionlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! missionlog */ "./node_modules/missionlog/index.js");
/* harmony import */ var missionlog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(missionlog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/analytics */ "./node_modules/firebase/analytics/dist/index.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // git-ignored




firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(_firebase_config_js__WEBPACK_IMPORTED_MODULE_1__["firebaseConfig"]);
var SurakartaFirebase = function SurakartaFirebase() {
  var _this = this;

  _classCallCheck(this, SurakartaFirebase);

  _defineProperty(this, "onAuthStateChanged", function (user) {
    if (!user) {
      missionlog__WEBPACK_IMPORTED_MODULE_2__["log"].info(missionlog__WEBPACK_IMPORTED_MODULE_2__["tag"].skFirebase, 'User not logged in, initiating sign-in workflow (redirect)');
      firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithRedirect(_this.authProvider).then(function () {
        return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().getRedirectResult();
      }).then(function (result) {
        // This gives you a Google Access Token.
        // You can use it to access the Google API.
        var token = result.credential.accessToken; // The signed-in user info.

        var user = result.user; // ...

        console.log(user);
      })["catch"](function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        missionlog__WEBPACK_IMPORTED_MODULE_2__["log"].error(missionlog__WEBPACK_IMPORTED_MODULE_2__["tag"].skFirebase, "User sign-in error (".concat(errorCode, "): ").concat(errorMessage));
      });
    }
  });

  this.authProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().onAuthStateChanged(this.onAuthStateChanged);
  missionlog__WEBPACK_IMPORTED_MODULE_2__["log"].info(missionlog__WEBPACK_IMPORTED_MODULE_2__["tag"].skFirebase, 'SurakartaFirebase initialized');
};
window.$bridge.$firebaseClient = new SurakartaFirebase();
/* harmony default export */ __webpack_exports__["default"] = (SurakartaFirebase);

/***/ }),

/***/ "./www/js/firebase.config.js":
/*!***********************************!*\
  !*** ./www/js/firebase.config.js ***!
  \***********************************/
/*! exports provided: firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
var firebaseConfig = {
  apiKey: 'AIzaSyAjnVuHaGVdvi6RMqXap3RGld2uhrpAt_4',
  authDomain: 'surakarta-app.firebaseapp.com',
  databaseURL: 'https://surakarta-app.firebaseio.com',
  projectId: 'surakarta-app',
  storageBucket: 'surakarta-app.appspot.com',
  messagingSenderId: '1012617519587',
  appId: '1:1012617519587:web:414ff700753bd579ed00d6',
  measurementId: 'G-FM96DN1WV7'
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93d3cvanMvU3VyYWthcnRhRmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2ZpcmViYXNlLmNvbmZpZy5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZUNvbmZpZyIsIlN1cmFrYXJ0YUZpcmViYXNlIiwidXNlciIsImxvZyIsImluZm8iLCJ0YWciLCJza0ZpcmViYXNlIiwiYXV0aCIsInNpZ25JbldpdGhSZWRpcmVjdCIsImF1dGhQcm92aWRlciIsInRoZW4iLCJnZXRSZWRpcmVjdFJlc3VsdCIsInJlc3VsdCIsInRva2VuIiwiY3JlZGVudGlhbCIsImFjY2Vzc1Rva2VuIiwiY29uc29sZSIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ3aW5kb3ciLCIkYnJpZGdlIiwiJGZpcmViYXNlQ2xpZW50IiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBQ3NEOztBQUN0RDtBQUVBO0FBQ0E7QUFFQUEsbURBQVEsQ0FBQ0MsYUFBVCxDQUF1QkMsa0VBQXZCO0FBRU8sSUFBTUMsaUJBQWIsR0FDRSw2QkFBZTtBQUFBOztBQUFBOztBQUFBLDhDQU9NLFVBQUNDLElBQUQsRUFBVTtBQUM3QixRQUFJLENBQUNBLElBQUwsRUFBVztBQUNUQyxvREFBRyxDQUFDQyxJQUFKLENBQVNDLDhDQUFHLENBQUNDLFVBQWIsRUFBeUIsNERBQXpCO0FBRUFSLHlEQUFRLENBQUNTLElBQVQsR0FBZ0JDLGtCQUFoQixDQUFtQyxLQUFJLENBQUNDLFlBQXhDLEVBQXNEQyxJQUF0RCxDQUEyRCxZQUFNO0FBQy9ELGVBQU9aLG1EQUFRLENBQUNTLElBQVQsR0FBZ0JJLGlCQUFoQixFQUFQO0FBQ0QsT0FGRCxFQUVHRCxJQUZILENBRVEsVUFBVUUsTUFBVixFQUFrQjtBQUN4QjtBQUNBO0FBQ0EsWUFBSUMsS0FBSyxHQUFHRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0JDLFdBQTlCLENBSHdCLENBSXhCOztBQUNBLFlBQUliLElBQUksR0FBR1UsTUFBTSxDQUFDVixJQUFsQixDQUx3QixDQU14Qjs7QUFFQWMsZUFBTyxDQUFDYixHQUFSLENBQVlELElBQVo7QUFDRCxPQVhELFdBV1MsVUFBVWUsS0FBVixFQUFpQjtBQUN4QjtBQUNBLFlBQUlDLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxJQUF0QjtBQUNBLFlBQUlDLFlBQVksR0FBR0gsS0FBSyxDQUFDSSxPQUF6QjtBQUVBbEIsc0RBQUcsQ0FBQ2MsS0FBSixDQUFVWiw4Q0FBRyxDQUFDQyxVQUFkLGdDQUFpRFksU0FBakQsZ0JBQWdFRSxZQUFoRTtBQUNELE9BakJEO0FBa0JEO0FBQ0YsR0E5QmM7O0FBQ2IsT0FBS1gsWUFBTCxHQUFvQixJQUFJWCxtREFBUSxDQUFDUyxJQUFULENBQWNlLGtCQUFsQixFQUFwQjtBQUVBeEIscURBQVEsQ0FBQ1MsSUFBVCxHQUFnQmdCLGtCQUFoQixDQUFtQyxLQUFLQSxrQkFBeEM7QUFDQXBCLGdEQUFHLENBQUNDLElBQUosQ0FBU0MsOENBQUcsQ0FBQ0MsVUFBYixFQUF5QiwrQkFBekI7QUFDRCxDQU5IO0FBa0NBa0IsTUFBTSxDQUFDQyxPQUFQLENBQWVDLGVBQWYsR0FBaUMsSUFBSXpCLGlCQUFKLEVBQWpDO0FBRWVBLGdGQUFmLEU7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQU8sSUFBTUQsY0FBYyxHQUFHO0FBQzFCMkIsUUFBTSxFQUFFLHlDQURrQjtBQUUxQkMsWUFBVSxFQUFFLCtCQUZjO0FBRzFCQyxhQUFXLEVBQUUsc0NBSGE7QUFJMUJDLFdBQVMsRUFBRSxlQUplO0FBSzFCQyxlQUFhLEVBQUUsMkJBTFc7QUFNMUJDLG1CQUFpQixFQUFFLGVBTk87QUFPMUJDLE9BQUssRUFBRSw0Q0FQbUI7QUFRMUJDLGVBQWEsRUFBRTtBQVJXLENBQXZCLEMiLCJmaWxlIjoic3VyYWthcnRhLWZpcmViYXNlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgeyBmaXJlYmFzZUNvbmZpZyB9IGZyb20gJy4vZmlyZWJhc2UuY29uZmlnLmpzJyAvLyBnaXQtaWdub3JlZFxuaW1wb3J0IHsgbG9nLCB0YWcgfSBmcm9tICdtaXNzaW9ubG9nJ1xuXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnXG5pbXBvcnQgJ2ZpcmViYXNlL2FuYWx5dGljcydcblxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcblxuZXhwb3J0IGNsYXNzIFN1cmFrYXJ0YUZpcmViYXNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuYXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKClcblxuICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQodGhpcy5vbkF1dGhTdGF0ZUNoYW5nZWQpXG4gICAgbG9nLmluZm8odGFnLnNrRmlyZWJhc2UsICdTdXJha2FydGFGaXJlYmFzZSBpbml0aWFsaXplZCcpXG4gIH1cblxuICBvbkF1dGhTdGF0ZUNoYW5nZWQgPSAodXNlcikgPT4ge1xuICAgIGlmICghdXNlcikge1xuICAgICAgbG9nLmluZm8odGFnLnNrRmlyZWJhc2UsICdVc2VyIG5vdCBsb2dnZWQgaW4sIGluaXRpYXRpbmcgc2lnbi1pbiB3b3JrZmxvdyAocmVkaXJlY3QpJylcblxuICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhSZWRpcmVjdCh0aGlzLmF1dGhQcm92aWRlcikudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuZ2V0UmVkaXJlY3RSZXN1bHQoKVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIC8vIFRoaXMgZ2l2ZXMgeW91IGEgR29vZ2xlIEFjY2VzcyBUb2tlbi5cbiAgICAgICAgLy8gWW91IGNhbiB1c2UgaXQgdG8gYWNjZXNzIHRoZSBHb29nbGUgQVBJLlxuICAgICAgICB2YXIgdG9rZW4gPSByZXN1bHQuY3JlZGVudGlhbC5hY2Nlc3NUb2tlblxuICAgICAgICAvLyBUaGUgc2lnbmVkLWluIHVzZXIgaW5mby5cbiAgICAgICAgdmFyIHVzZXIgPSByZXN1bHQudXNlclxuICAgICAgICAvLyAuLi5cblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cbiAgICAgICAgdmFyIGVycm9yQ29kZSA9IGVycm9yLmNvZGVcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2VcblxuICAgICAgICBsb2cuZXJyb3IodGFnLnNrRmlyZWJhc2UsIGBVc2VyIHNpZ24taW4gZXJyb3IgKCR7ZXJyb3JDb2RlfSk6ICR7ZXJyb3JNZXNzYWdlfWApXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG53aW5kb3cuJGJyaWRnZS4kZmlyZWJhc2VDbGllbnQgPSBuZXcgU3VyYWthcnRhRmlyZWJhc2UoKVxuXG5leHBvcnQgZGVmYXVsdCBTdXJha2FydGFGaXJlYmFzZVxuIiwiZXhwb3J0IGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogJ0FJemFTeUFqblZ1SGFHVmR2aTZSTXFYYXAzUkdsZDJ1aHJwQXRfNCcsXG4gICAgYXV0aERvbWFpbjogJ3N1cmFrYXJ0YS1hcHAuZmlyZWJhc2VhcHAuY29tJyxcbiAgICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vc3VyYWthcnRhLWFwcC5maXJlYmFzZWlvLmNvbScsXG4gICAgcHJvamVjdElkOiAnc3VyYWthcnRhLWFwcCcsXG4gICAgc3RvcmFnZUJ1Y2tldDogJ3N1cmFrYXJ0YS1hcHAuYXBwc3BvdC5jb20nLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAnMTAxMjYxNzUxOTU4NycsXG4gICAgYXBwSWQ6ICcxOjEwMTI2MTc1MTk1ODc6d2ViOjQxNGZmNzAwNzUzYmQ1NzllZDAwZDYnLFxuICAgIG1lYXN1cmVtZW50SWQ6ICdHLUZNOTZETjFXVjcnXG59XG4iXSwic291cmNlUm9vdCI6IiJ9