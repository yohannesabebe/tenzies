import React from 'react'
import './style.css'
import Box from './components/Box.js'
import Text from './components/Text.js'
import values from './values.js'
import Roll from './components/Roll.js'

export default function App(){
    const [boxes, setBoxes] = React.useState(values.map(value => value.val))
    function randomGenerator(){
        return (
            Math.floor(Math.random() * (10) + 1)
        )
    }
   
    
    
    return (
       <div className='main'>
        <div className='sub'>
            <Text />
            <Box 
            boxState = {boxes}
            />
            <Roll />
        </div>
        </div>
    )
}
