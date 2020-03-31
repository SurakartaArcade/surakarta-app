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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93d3cvanMvU3VyYWthcnRhRmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2ZpcmViYXNlLmNvbmZpZy5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZUNvbmZpZyIsIlN1cmFrYXJ0YUZpcmViYXNlIiwidXNlciIsImxvZyIsImluZm8iLCJ0YWciLCJza0ZpcmViYXNlIiwiYXV0aCIsInNpZ25JbldpdGhSZWRpcmVjdCIsImF1dGhQcm92aWRlciIsInRoZW4iLCJnZXRSZWRpcmVjdFJlc3VsdCIsInJlc3VsdCIsInRva2VuIiwiY3JlZGVudGlhbCIsImFjY2Vzc1Rva2VuIiwiY29uc29sZSIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ3aW5kb3ciLCIkYnJpZGdlIiwiJGZpcmViYXNlQ2xpZW50IiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBQ3NEOztBQUN0RDtBQUVBO0FBQ0E7QUFFQUEsbURBQVEsQ0FBQ0MsYUFBVCxDQUF1QkMsa0VBQXZCO0FBRU8sSUFBTUMsaUJBQWIsR0FDSSw2QkFBZTtBQUFBOztBQUFBOztBQUFBLDhDQU9NLFVBQUNDLElBQUQsRUFBVTtBQUMzQixRQUFJLENBQUNBLElBQUwsRUFBVztBQUNQQyxvREFBRyxDQUFDQyxJQUFKLENBQVNDLDhDQUFHLENBQUNDLFVBQWIsRUFBeUIsNERBQXpCO0FBRUFSLHlEQUFRLENBQUNTLElBQVQsR0FBZ0JDLGtCQUFoQixDQUFtQyxLQUFJLENBQUNDLFlBQXhDLEVBQXNEQyxJQUF0RCxDQUEyRCxZQUFNO0FBQzdELGVBQU9aLG1EQUFRLENBQUNTLElBQVQsR0FBZ0JJLGlCQUFoQixFQUFQO0FBQ0gsT0FGRCxFQUVHRCxJQUZILENBRVEsVUFBVUUsTUFBVixFQUFrQjtBQUN0QjtBQUNBO0FBQ0EsWUFBSUMsS0FBSyxHQUFHRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0JDLFdBQTlCLENBSHNCLENBSXRCOztBQUNBLFlBQUliLElBQUksR0FBR1UsTUFBTSxDQUFDVixJQUFsQixDQUxzQixDQU10Qjs7QUFFQWMsZUFBTyxDQUFDYixHQUFSLENBQVlELElBQVo7QUFDSCxPQVhELFdBV1MsVUFBVWUsS0FBVixFQUFpQjtBQUN0QjtBQUNBLFlBQUlDLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxJQUF0QjtBQUNBLFlBQUlDLFlBQVksR0FBR0gsS0FBSyxDQUFDSSxPQUF6QjtBQUVBbEIsc0RBQUcsQ0FBQ2MsS0FBSixDQUFVWiw4Q0FBRyxDQUFDQyxVQUFkLGdDQUFpRFksU0FBakQsZ0JBQWdFRSxZQUFoRTtBQUNILE9BakJEO0FBa0JIO0FBQ0osR0E5QmM7O0FBQ1gsT0FBS1gsWUFBTCxHQUFvQixJQUFJWCxtREFBUSxDQUFDUyxJQUFULENBQWNlLGtCQUFsQixFQUFwQjtBQUVBeEIscURBQVEsQ0FBQ1MsSUFBVCxHQUFnQmdCLGtCQUFoQixDQUFtQyxLQUFLQSxrQkFBeEM7QUFDQXBCLGdEQUFHLENBQUNDLElBQUosQ0FBU0MsOENBQUcsQ0FBQ0MsVUFBYixFQUF5QiwrQkFBekI7QUFDSCxDQU5MO0FBa0NBa0IsTUFBTSxDQUFDQyxPQUFQLENBQWVDLGVBQWYsR0FBaUMsSUFBSXpCLGlCQUFKLEVBQWpDO0FBRWVBLGdGQUFmLEU7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQU8sSUFBTUQsY0FBYyxHQUFHO0FBQzFCMkIsUUFBTSxFQUFFLHlDQURrQjtBQUUxQkMsWUFBVSxFQUFFLCtCQUZjO0FBRzFCQyxhQUFXLEVBQUUsc0NBSGE7QUFJMUJDLFdBQVMsRUFBRSxlQUplO0FBSzFCQyxlQUFhLEVBQUUsMkJBTFc7QUFNMUJDLG1CQUFpQixFQUFFLGVBTk87QUFPMUJDLE9BQUssRUFBRSw0Q0FQbUI7QUFRMUJDLGVBQWEsRUFBRTtBQVJXLENBQXZCLEMiLCJmaWxlIjoic3VyYWthcnRhLWZpcmViYXNlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgeyBmaXJlYmFzZUNvbmZpZyB9IGZyb20gJy4vZmlyZWJhc2UuY29uZmlnLmpzJyAvLyBnaXQtaWdub3JlZFxuaW1wb3J0IHsgbG9nLCB0YWcgfSBmcm9tICdtaXNzaW9ubG9nJ1xuXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnXG5pbXBvcnQgJ2ZpcmViYXNlL2FuYWx5dGljcydcblxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcblxuZXhwb3J0IGNsYXNzIFN1cmFrYXJ0YUZpcmViYXNlIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuYXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKClcblxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKHRoaXMub25BdXRoU3RhdGVDaGFuZ2VkKVxuICAgICAgICBsb2cuaW5mbyh0YWcuc2tGaXJlYmFzZSwgJ1N1cmFrYXJ0YUZpcmViYXNlIGluaXRpYWxpemVkJylcbiAgICB9XG5cbiAgICBvbkF1dGhTdGF0ZUNoYW5nZWQgPSAodXNlcikgPT4ge1xuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKHRhZy5za0ZpcmViYXNlLCAnVXNlciBub3QgbG9nZ2VkIGluLCBpbml0aWF0aW5nIHNpZ24taW4gd29ya2Zsb3cgKHJlZGlyZWN0KScpXG5cbiAgICAgICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUmVkaXJlY3QodGhpcy5hdXRoUHJvdmlkZXIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuZ2V0UmVkaXJlY3RSZXN1bHQoKVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBnaXZlcyB5b3UgYSBHb29nbGUgQWNjZXNzIFRva2VuLlxuICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gdXNlIGl0IHRvIGFjY2VzcyB0aGUgR29vZ2xlIEFQSS5cbiAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSByZXN1bHQuY3JlZGVudGlhbC5hY2Nlc3NUb2tlblxuICAgICAgICAgICAgICAgIC8vIFRoZSBzaWduZWQtaW4gdXNlciBpbmZvLlxuICAgICAgICAgICAgICAgIHZhciB1c2VyID0gcmVzdWx0LnVzZXJcbiAgICAgICAgICAgICAgICAvLyAuLi5cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgRXJyb3JzIGhlcmUuXG4gICAgICAgICAgICAgICAgdmFyIGVycm9yQ29kZSA9IGVycm9yLmNvZGVcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZVxuXG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKHRhZy5za0ZpcmViYXNlLCBgVXNlciBzaWduLWluIGVycm9yICgke2Vycm9yQ29kZX0pOiAke2Vycm9yTWVzc2FnZX1gKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxud2luZG93LiRicmlkZ2UuJGZpcmViYXNlQ2xpZW50ID0gbmV3IFN1cmFrYXJ0YUZpcmViYXNlKClcblxuZXhwb3J0IGRlZmF1bHQgU3VyYWthcnRhRmlyZWJhc2VcbiIsImV4cG9ydCBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6ICdBSXphU3lBam5WdUhhR1Zkdmk2Uk1xWGFwM1JHbGQydWhycEF0XzQnLFxuICAgIGF1dGhEb21haW46ICdzdXJha2FydGEtYXBwLmZpcmViYXNlYXBwLmNvbScsXG4gICAgZGF0YWJhc2VVUkw6ICdodHRwczovL3N1cmFrYXJ0YS1hcHAuZmlyZWJhc2Vpby5jb20nLFxuICAgIHByb2plY3RJZDogJ3N1cmFrYXJ0YS1hcHAnLFxuICAgIHN0b3JhZ2VCdWNrZXQ6ICdzdXJha2FydGEtYXBwLmFwcHNwb3QuY29tJyxcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogJzEwMTI2MTc1MTk1ODcnLFxuICAgIGFwcElkOiAnMToxMDEyNjE3NTE5NTg3OndlYjo0MTRmZjcwMDc1M2JkNTc5ZWQwMGQ2JyxcbiAgICBtZWFzdXJlbWVudElkOiAnRy1GTTk2RE4xV1Y3J1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==