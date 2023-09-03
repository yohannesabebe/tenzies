import React from 'react'
import './style.css'
import Box from './components/Box.js'
import Text from './components/Text.js'
import values from './values.js'
import Roll from './components/Roll.js'
import Reset from './components/Reset'
import Confetti from './components/Confetti'

export default function App(){
    const [boxes, setBoxes] = React.useState(values)
    function randomGenerator(){
        return (
            Math.floor(Math.random() * (6) + 1)
        )
    }
   function randomize(){
    setBoxes(prevBox => prevBox.map(obj => {
        
        return(
            obj.clicked? obj : {...obj, val:randomGenerator()}
        )
    }))
   }
   function resetAll(){
    setBoxes(prevBox => prevBox.map(obj => {
        
        return(
             {...obj, val:randomGenerator(), clicked:false}
        )
    }))
   }
    function toggle(boxId){
    setBoxes(prevBox => prevBox.map(value => {
        return (value.id === boxId? {...value, clicked:!value.clicked}: value)
    }))
    
    }

    let boxVar = boxes.map(value => {

        return <Box 
        boxValue = {value.val}
        handleClick={toggle}
        id = {value.id}
        key={value.id}
        boolVar={value.clicked}
        />
    
    }) 
    
    const clickList = []
    boxes.forEach(value => {
        value.clicked? clickList.push(value.val): clickList.push()
    })
    
    const allEqual = arr => arr.every( v => v === arr[0] )
    const win = (allEqual(clickList) && clickList.length === 10) 
    return (
       <div className='main'>
        <div className='sub'>
          
            <Text />
          <div className='box-container'> {boxVar}</div>
            {!win? <Roll 
            handleClick={randomize}
            />:<Reset 
            handleClick={resetAll}
            />}
            {win && <Confetti/>}
            
        </div>
        </div>
    )
}