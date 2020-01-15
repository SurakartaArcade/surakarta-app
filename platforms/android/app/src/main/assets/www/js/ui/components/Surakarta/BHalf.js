import BlackPebbleIcon from '../BlackPebbleIcon'
import {
    IonApp,
    IonButton,
    IonFooter,
    IonPage,
    IonIcon,
    IonText
} from '@ionic/react'
import OptionsPopover from '../Optionspopover'
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
            timerRunning: false,
            popoverOpen: false,
            popoverOptions: [],
            popoverTitle: ''
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

    onMenuClick = () => {
        const firstOptions = (window.$bridge.gameRunning)
            ? ['Resign']
            : ['New Game', 'Analyze']

        this.setState({
            popoverOpen: true,
            popoverOptions: [
                ...firstOptions,
                'Settings',
                'Cancel'
            ],
            popoverTitle: ''
        })
    }

    onMoveBack = () => {
        window.$bridge.fire('moveback')
    }

    onMoveForward = () => {
        window.$bridge.fire('moveforward')
    }

    onOptionSelected = (option) => {
        switch (option) {
        case 'New Game':
            window.$bridge.fireAsync('gamestart')
            this.setState({ popoverOpen: false })
            break
        case 'Resign':
            window.$bridge.fireAsync('resign', {
                player: window.$bridge.config.isLocal
                    ? window.$bridge.turnPlayer
                    : window.$bridge.inputPlayer
            })
            break
        case 'Settings':
            window.navigator.app.exitApp()
            break
        case 'Cancel':
            this.setState({ popoverOpen: false })
            break
        }
    }

    /**
     * @bridge-binder
     */
    onGameOver = (event) => {
        const data = event.eventData

        this.stopTimer()
        this.setState({
            popoverOpen: true,
            popoverTitle: data.winner ? `${data.winnerName} won ${data.reason}!` : '',
            popoverOptions: [
                'New Game',
                'Analyze',
                'Settings',
                'Cancel'
            ]
        })
    }

    render () {
        return (
            <IonApp>
                <FillerIonPage>
                    <OptionsPopover isOpen={this.state.popoverOpen}
                        optionsList={this.state.popoverOptions}
                        onOptionSelected={this.onOptionSelected}
                        title={this.state.popoverTitle} />
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
                            <IonButton className="nav-button" color="light" onClick={this.onMenuClick}>
                                <IonIcon name="menu" style={{ color: 'black' }} size="large"/>
                            </IonButton>
                            <IonButton className="nav-button" color="light" onClick={this.onMoveBack}>
                                <IonIcon name="arrow-dropleft" style={{ color: 'black' }} size="large"/>
                            </IonButton>
                            <IonButton className="nav-button" color="light" onClick={this.onMoveForward}>
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
