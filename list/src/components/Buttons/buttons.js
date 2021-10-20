import React from 'react'
import './button2.css'

function button1(props) {
    return (
        <div>
            <button className={props.class}>{props.name}</button>
        </div>
    )
}

export default button1
