import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {
    const capitalize=()=>{
        let lower= props.alert.type.toLowerCase();
        return (lower.charAt(0).toUpperCase() + lower.slice(1));
    }
    return (
        props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize()}</strong>:{props.alert.msg}
        </div>

    )
}
Alert.propTypes={
    alert :PropTypes.object
}
