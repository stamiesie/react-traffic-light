import React from 'react'

export default function Light({ color, active, onClick, setActive }) {
    return (
        <div>
            <div className="light" style={{ backgroundColor: 
                color === active ?
                color: 'grey' }}
                onClick={() => setActive(color)}
                // onClick={onClick}
                ></div>
        </div>
    )
}
