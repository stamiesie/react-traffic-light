import React from 'react'

export default function Light({ color, active }) {
    return (
        <div>
            <div className="light" style={{ backgroundColor: 
                color === active ?
            color: 'grey' }}></div>
        </div>
    )
}
