# Surakarta powered by Apache Cordova, PixiJS, & Firebase

Surakarta is an open source project whose aim is to bring back life into the traditional game. It uses Cordova to maintain cross-platform code with custom-built plugins.

> To learn about the actual game, here is a link for you: https://medium.com/@sukantk3.4/surakarta-bddcf11fcf9c

## Structure

The Surakarta game, Firebase communication & matchmaking, and computer moves are (going to or are) implemented in JavaScript.

### Plugins

* `GameConfig`: This plugin is used to send initialization parameters to `SurkarataPixi` that define who is playing & what is being played (e.g. any sequence of moves to play beforehand).

### Layers

There are three layers in this project :-

* gl-app: This is the PixiJS application that handles everything in the WebGL canvas and wraps around the underlying `Surakarta` instance.

* ui: This is a React application that handles the layout of the surrounding UI and reacts to events fired by gl-app (or `SurakartaPixi`). It also manages the ticking down of timers.

* bridge: This is a event firing object that both gl-app & the ui use for bilateral communication. It is initialized at `window.$bridge`, i.e. is globally available.

## Bridge Events

The bridge contains a list of event-stores, or just events, that hold event-associated data. This data is updated whenever an event is fired; however, the data can still be referenced after firing!

> Functions that listen to bridge events are called bridge-binders and are annotated so in documentation. They are different from functions that listen to turns in `Surakarta` (called responders) and functions that listen to events emitted by `Surakarta`.

The following are 

## Preview
<p>
  <img src="https://i.ibb.co/KF6jcP6/Screenshot-1578363934.png" width="256" />
  <img src="https://i.ibb.co/kBVQ1GZ/Screenshot-1578708270.png" width="256" />
</p>
