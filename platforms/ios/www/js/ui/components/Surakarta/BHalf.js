import BlackPebbleIcon from '../BlackPebbleIcon'
import {
    IonApp,
    IonButton,
    IonFooter,
    IonPage,
    IonIcon,
    IonText
} from '@ionic/react'
import PlayerBar from '../PlayerBar'
import ProfilePlate from '../ProfilePlate'
import React from 'react'
import RedPebbleIcon from '../RedPebbleIcon'
import styled from 'styled-components'
import Timer from '../Timer'
import TimerBinder from './TimerBinder'

const FillerIonPage = styled(IonPage)`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Filler = styled.div`
  flex-grow: 1;
`

const CenteredButtons = styled.div`
  text-align: center;
`

/** stylelint-disable */

/**
 * Portrait components displayed below the canvas.
 */
export class BHalf extends React.Component {
    constructor (props) {
        super(props)
        TimerBinder.initBinder(this, true)

        this.state = {
            timerValue: this.timerValue,
            timerRunning: false
        }
    }

    componentDidMount () {
        this.registerTimerListeners()
    }

    componentWillUnmount () {
        this.unregisterTimerListeners()
    }

    render () {
        return (
            <IonApp>
                <FillerIonPage>
                    <PlayerBar>
                        <ProfilePlate turnPlayer={window.$bridge.turnPlayer === window.$bridge.inputPlayer}>
                            { window.$bridge.inputPlayer === 'black' ? <BlackPebbleIcon /> : <RedPebbleIcon />}
                            <IonText>You</IonText>
                        </ProfilePlate>
                        <Timer timeInMillis={this.state.timerValue} />
                    </PlayerBar>
                    <Filler />
                    <IonFooter>
                        <CenteredButtons>
                            <IonButton className="nav-button" color="light">
                                <IonIcon name="menu" style={{ color: 'black' }} size="large"/>
                            </IonButton>
                            <IonButton className="nav-button" color="light">
                                <IonIcon name="arrow-dropleft" style={{ color: 'black' }} size="large"/>
                            </IonButton>
                            <IonButton className="nav-button" color="light">
                                <IonIcon name="arrow-dropright" style={{ color: 'black' }} size="large" />
                            </IonButton>
                            <IonButton className="nav-button" color="light">
                                <IonIcon name="help" style={{ color: 'black' }} size="large"/>
                            </IonButton>
                        </CenteredButtons>
                    </IonFooter>
                </FillerIonPage>
            </IonApp>
        )
    }
}

export default BHalf
