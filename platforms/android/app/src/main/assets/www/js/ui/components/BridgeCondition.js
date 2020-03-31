import React from 'react'
import PropTypes from 'prop-types'

export function BridgeCondition (props) {
    if (window.$bridge[props.property]) {
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        )
    } else {
        return null
    }
}

BridgeCondition.propTypes = {
    property: PropTypes.string.isRequired
}

export default BridgeCondition
