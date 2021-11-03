import React from 'react'
import Light from '../components/Light'

export default function LightContainer() {
    const colors = ['red', 'yellow', 'green'];
    return (
        <div>
            {colors.map((color) => {
                return <Light color = {color}/>
            })}
        </div>
    )
}
