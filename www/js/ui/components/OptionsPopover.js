import {
    IonButton,
    IonPopover,
    IonText
} from '@ionic/react'
import PropTypes from 'prop-types'
import React from 'react'

export function OptionsPopover (props) {
    return (
        <IonPopover className="options-popover"
            isOpen={props.isOpen}
            onDidDismiss={() => props.onOptionSelected('Cancel')}>
            {props.title
                ? <IonText color="dark" className="options-popover-title">{props.title}</IonText>
                : null }
            {props.optionsList.map(value => (
                <IonButton className="options-popover-button"
                    key={value}
                    onClick={() => props.onOptionSelected(value)}
                    color="light">
                    {value}
                </IonButton>
            ))}
        </IonPopover>
    )
}

OptionsPopover.propTypes = {
    title: PropTypes.string,
    optionsList: PropTypes.arrayOf(PropTypes.string),
    onOptionSelected: PropTypes.func.isRequired,
    isOpen: PropTypes.bool
}

export default OptionsPopover
