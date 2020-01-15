import React from 'react'
import ReactDOM from 'react-dom'
import BHalf from './components/Surakarta/BHalf'
import UHalf from './components/Surakarta/UHalf'
import IonicTheme from '../../css/ionic.theme.scss' // eslint-disable-line no-unused-vars

export function init () {
    ReactDOM.render(<UHalf headless={true} />, document.getElementById('view-top'))
    ReactDOM.render(<BHalf />, document.getElementById('view-bottom'))

    window.$bridge.registerListener('init', (event) => {
        if (!window.$bridge.headless) {
            ReactDOM.render(<UHalf headless={false} />, document.getElementById('view-top'))
        }
    })
}

export default {
    init
}
