import React from 'react'
import { IonText } from '@ionic/react'
import PropTypes from 'prop-types'

export function Timer (props) {
    const { timeInMillis } = props

    if (timeInMillis < 0) {
        return (
            <IonText className="timer">Disabled</IonText>
        )
    }

    const min = Math.floor(timeInMillis / 60000)
    let secs = Math.floor((timeInMillis % 60000) / 1000)
    const decisecs = Math.floor((timeInMillis % 1000) / 100)

    if (secs < 10) {
        secs = `0${secs}`
    }

    return (
        <IonText className="timer">
            {`${min} : ${secs}${min < 1 && secs < 10 ? ` : ${decisecs}` : ''}`}
        </IonText>
    )
}

Timer.propTypes = {
    timeInMillis: PropTypes.number
}

export default Timer
