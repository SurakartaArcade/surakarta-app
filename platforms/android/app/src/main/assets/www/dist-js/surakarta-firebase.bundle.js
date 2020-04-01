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
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/analytics */ "./node_modules/firebase/analytics/dist/index.esm.js");
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

  Object(_firebase_logger__WEBPACK_IMPORTED_MODULE_3__["setLogLevel"])('DEBUG');
  this.authProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();
  setTimeout(this.onAuthStateChanged, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93d3cvanMvU3VyYWthcnRhRmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2ZpcmViYXNlLmNvbmZpZy5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZUNvbmZpZyIsIlN1cmFrYXJ0YUZpcmViYXNlIiwidXNlciIsImxvZyIsImluZm8iLCJ0YWciLCJza0ZpcmViYXNlIiwiYXV0aCIsInNpZ25JbldpdGhSZWRpcmVjdCIsImF1dGhQcm92aWRlciIsInRoZW4iLCJnZXRSZWRpcmVjdFJlc3VsdCIsInJlc3VsdCIsInRva2VuIiwiY3JlZGVudGlhbCIsImFjY2Vzc1Rva2VuIiwiY29uc29sZSIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJzZXRMb2dMZXZlbCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNldFRpbWVvdXQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ3aW5kb3ciLCIkYnJpZGdlIiwiJGZpcmViYXNlQ2xpZW50IiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUNzRDs7QUFDdEQ7QUFFQTtBQUNBO0FBQ0E7QUFFQUEsbURBQVEsQ0FBQ0MsYUFBVCxDQUF1QkMsa0VBQXZCO0FBRU8sSUFBTUMsaUJBQWIsR0FDRSw2QkFBZTtBQUFBOztBQUFBOztBQUFBLDhDQVFNLFVBQUNDLElBQUQsRUFBVTtBQUM3QixRQUFJLENBQUNBLElBQUwsRUFBVztBQUNUQyxvREFBRyxDQUFDQyxJQUFKLENBQVNDLDhDQUFHLENBQUNDLFVBQWIsRUFBeUIsNERBQXpCO0FBRUFSLHlEQUFRLENBQUNTLElBQVQsR0FBZ0JDLGtCQUFoQixDQUFtQyxLQUFJLENBQUNDLFlBQXhDLEVBQXNEQyxJQUF0RCxDQUEyRCxZQUFNO0FBQy9ELGVBQU9aLG1EQUFRLENBQUNTLElBQVQsR0FBZ0JJLGlCQUFoQixFQUFQO0FBQ0QsT0FGRCxFQUVHRCxJQUZILENBRVEsVUFBVUUsTUFBVixFQUFrQjtBQUN4QjtBQUNBO0FBQ0EsWUFBSUMsS0FBSyxHQUFHRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0JDLFdBQTlCLENBSHdCLENBSXhCOztBQUNBLFlBQUliLElBQUksR0FBR1UsTUFBTSxDQUFDVixJQUFsQixDQUx3QixDQU14Qjs7QUFFQWMsZUFBTyxDQUFDYixHQUFSLENBQVlELElBQVo7QUFDRCxPQVhELFdBV1MsVUFBVWUsS0FBVixFQUFpQjtBQUN4QjtBQUNBLFlBQUlDLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxJQUF0QjtBQUNBLFlBQUlDLFlBQVksR0FBR0gsS0FBSyxDQUFDSSxPQUF6QjtBQUVBbEIsc0RBQUcsQ0FBQ2MsS0FBSixDQUFVWiw4Q0FBRyxDQUFDQyxVQUFkLGdDQUFpRFksU0FBakQsZ0JBQWdFRSxZQUFoRTtBQUNELE9BakJEO0FBa0JEO0FBQ0YsR0EvQmM7O0FBQ2JFLHNFQUFXLENBQUMsT0FBRCxDQUFYO0FBQ0EsT0FBS2IsWUFBTCxHQUFvQixJQUFJWCxtREFBUSxDQUFDUyxJQUFULENBQWNnQixrQkFBbEIsRUFBcEI7QUFFQUMsWUFBVSxDQUFDLEtBQUtDLGtCQUFOLEVBQTBCLENBQTFCLENBQVY7QUFDQXRCLGdEQUFHLENBQUNDLElBQUosQ0FBU0MsOENBQUcsQ0FBQ0MsVUFBYixFQUF5QiwrQkFBekI7QUFDRCxDQVBIO0FBbUNBb0IsTUFBTSxDQUFDQyxPQUFQLENBQWVDLGVBQWYsR0FBaUMsSUFBSTNCLGlCQUFKLEVBQWpDO0FBRWVBLGdGQUFmLEU7Ozs7Ozs7Ozs7OztBQy9DQTtBQUFBO0FBQU8sSUFBTUQsY0FBYyxHQUFHO0FBQzFCNkIsUUFBTSxFQUFFLHlDQURrQjtBQUUxQkMsWUFBVSxFQUFFLCtCQUZjO0FBRzFCQyxhQUFXLEVBQUUsc0NBSGE7QUFJMUJDLFdBQVMsRUFBRSxlQUplO0FBSzFCQyxlQUFhLEVBQUUsMkJBTFc7QUFNMUJDLG1CQUFpQixFQUFFLGVBTk87QUFPMUJDLE9BQUssRUFBRSw0Q0FQbUI7QUFRMUJDLGVBQWEsRUFBRTtBQVJXLENBQXZCLEMiLCJmaWxlIjoic3VyYWthcnRhLWZpcmViYXNlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgeyBmaXJlYmFzZUNvbmZpZyB9IGZyb20gJy4vZmlyZWJhc2UuY29uZmlnLmpzJyAvLyBnaXQtaWdub3JlZFxuaW1wb3J0IHsgbG9nLCB0YWcgfSBmcm9tICdtaXNzaW9ubG9nJ1xuXG5pbXBvcnQgeyBzZXRMb2dMZXZlbCB9IGZyb20gJ0BmaXJlYmFzZS9sb2dnZXInXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnXG5pbXBvcnQgJ2ZpcmViYXNlL2FuYWx5dGljcydcblxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcblxuZXhwb3J0IGNsYXNzIFN1cmFrYXJ0YUZpcmViYXNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHNldExvZ0xldmVsKCdERUJVRycpXG4gICAgdGhpcy5hdXRoUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKVxuXG4gICAgc2V0VGltZW91dCh0aGlzLm9uQXV0aFN0YXRlQ2hhbmdlZCwgMClcbiAgICBsb2cuaW5mbyh0YWcuc2tGaXJlYmFzZSwgJ1N1cmFrYXJ0YUZpcmViYXNlIGluaXRpYWxpemVkJylcbiAgfVxuXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCA9ICh1c2VyKSA9PiB7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICBsb2cuaW5mbyh0YWcuc2tGaXJlYmFzZSwgJ1VzZXIgbm90IGxvZ2dlZCBpbiwgaW5pdGlhdGluZyBzaWduLWluIHdvcmtmbG93IChyZWRpcmVjdCknKVxuXG4gICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFJlZGlyZWN0KHRoaXMuYXV0aFByb3ZpZGVyKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5nZXRSZWRpcmVjdFJlc3VsdCgpXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgLy8gVGhpcyBnaXZlcyB5b3UgYSBHb29nbGUgQWNjZXNzIFRva2VuLlxuICAgICAgICAvLyBZb3UgY2FuIHVzZSBpdCB0byBhY2Nlc3MgdGhlIEdvb2dsZSBBUEkuXG4gICAgICAgIHZhciB0b2tlbiA9IHJlc3VsdC5jcmVkZW50aWFsLmFjY2Vzc1Rva2VuXG4gICAgICAgIC8vIFRoZSBzaWduZWQtaW4gdXNlciBpbmZvLlxuICAgICAgICB2YXIgdXNlciA9IHJlc3VsdC51c2VyXG4gICAgICAgIC8vIC4uLlxuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxuICAgICAgICB2YXIgZXJyb3JDb2RlID0gZXJyb3IuY29kZVxuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZVxuXG4gICAgICAgIGxvZy5lcnJvcih0YWcuc2tGaXJlYmFzZSwgYFVzZXIgc2lnbi1pbiBlcnJvciAoJHtlcnJvckNvZGV9KTogJHtlcnJvck1lc3NhZ2V9YClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbndpbmRvdy4kYnJpZGdlLiRmaXJlYmFzZUNsaWVudCA9IG5ldyBTdXJha2FydGFGaXJlYmFzZSgpXG5cbmV4cG9ydCBkZWZhdWx0IFN1cmFrYXJ0YUZpcmViYXNlXG4iLCJleHBvcnQgY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiAnQUl6YVN5QWpuVnVIYUdWZHZpNlJNcVhhcDNSR2xkMnVocnBBdF80JyxcbiAgICBhdXRoRG9tYWluOiAnc3VyYWthcnRhLWFwcC5maXJlYmFzZWFwcC5jb20nLFxuICAgIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly9zdXJha2FydGEtYXBwLmZpcmViYXNlaW8uY29tJyxcbiAgICBwcm9qZWN0SWQ6ICdzdXJha2FydGEtYXBwJyxcbiAgICBzdG9yYWdlQnVja2V0OiAnc3VyYWthcnRhLWFwcC5hcHBzcG90LmNvbScsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6ICcxMDEyNjE3NTE5NTg3JyxcbiAgICBhcHBJZDogJzE6MTAxMjYxNzUxOTU4Nzp3ZWI6NDE0ZmY3MDA3NTNiZDU3OWVkMDBkNicsXG4gICAgbWVhc3VyZW1lbnRJZDogJ0ctRk05NkROMVdWNydcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=