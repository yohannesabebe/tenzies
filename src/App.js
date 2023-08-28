import React from 'react'
import './style.css'
import Box from './components/Box.js'
import Text from './components/Text.js'
import values from './values.js'
import Roll from './components/Roll.js'

export default function App(){
    const [boxes, setBoxes] = React.useState(values)
    function randomGenerator(){
        return (
            Math.floor(Math.random() * (10) + 1)
        )
    }
   function randomize(){
    setBoxes(prevBox => prevBox.map(obj => {
        return(
            {...obj, val:randomGenerator()}
        )
    }))
   }
//     function toggle(event){
// console.log(event.target)
//     }
    
    return (
       <div className='main'>
        <div className='sub'>
            <Text />
            <Box 
            boxState = {boxes.map(i => i.val)}
            // handleClick={toggle}
            // id = {boxes.map(i=>i.id)}
            // key ={boxes.map(i=>i.id)}
            />
            <Roll 
            handleClick={randomize}
            />
        </div>
        </div>
    )
}