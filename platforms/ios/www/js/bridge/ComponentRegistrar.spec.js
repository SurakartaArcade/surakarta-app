/**
 * All Surakarta builds will provide a component registrar at
 *`window.$componentRegistrar`. This object allows application components
 * to be loaded lazily without having to "know" where they are located
 * in the build's codebase - which facilitates code reuse across Cordova
 * and the web.
 *
 * @typedef {object} ComponentRegistrar
 * @property {Function} requireComponent - function that accepts a component
 *  name (one of 'firebaseClient', 'ui') and returns a promise that returns
 *  that module
 */
