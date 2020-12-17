import React from 'react'
import { RoomContext } from '../context'

export default function Banner({title, subtitle, children}) {

    // static contextType = RoomContext;

    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}

