import BlackPebbleIcon from '../BlackPebbleIcon'
import {
    IonButton,
    IonButtons,
    IonApp,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonText,
    IonIcon
} from '@ionic/react'
import PlayerBar from '../PlayerBar'
import ProfilePlate from '../ProfilePlate'
import React from 'react'
import RedPebbleIcon from '../RedPebbleIcon'
import Timer from '../Timer'
import TimerBinder from './TimerBinder'

/**
 * Portrait components displayed above the canvas.
 */
export class UHalf extends React.Component {
    constructor (props) {
        super(props)
        TimerBinder.initBinder(this, false)

        this.state = {
            timerValue: this.timerValue,
            timerRunning: false
        }
    }

    componentDidMount () {
        this.registerTimerListeners()
        window.$bridge.registerListener('gameover', this.onGameOver)
    }

    componentWillUnmount () {
        this.unregisterTimerListeners()
        window.$bridge.unregisterListener('gameover', this.onGameOver)
    }

    /**
     * @bridge-binder
     */
    onGameOver = () => {
        this.stopTimer()
    }

    render () {
        return (
            <IonApp>
                <IonPage>
                    <IonHeader style={{ marginBottom: '8px' }}>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonButton color="primary">
                                    <IonIcon name="arrow-back" style={{ color: 'black', fontSize: '24px' }} />
                                </IonButton>
                            </IonButtons>
                            <IonTitle>
                                    Playground
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <PlayerBar>
                        <ProfilePlate turnPlayer={window.$bridge.turnPlayer !== window.$bridge.inputPlayer}>
                            { window.$bridge.inputPlayer === 'red' ? <BlackPebbleIcon /> : <RedPebbleIcon />}
                            <IonText>You</IonText>
                        </ProfilePlate>
                        <Timer timeInMillis={this.state.timerValue} />
                    </PlayerBar>
                </IonPage>
            </IonApp>
        )
    }
}

export default UHalf
