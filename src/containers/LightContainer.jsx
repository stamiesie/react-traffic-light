import React, { useState } from 'react';
import Light from '../components/Light';

export default function LightContainer() {
    const colors = ['red', 'yellow', 'green'];

    const [active, setActive] = useState('red');

    // const handleClick = () => {
    //     setActive(active);
    // }
    
    return (
        <div>
            {colors.map((color) => {
                return <> 
                <Light 
                color={color}
                active={active}
                // onClick={handleClick}
                setActive={setActive}
                />
                </>
            })}
        </div>
    )
}
