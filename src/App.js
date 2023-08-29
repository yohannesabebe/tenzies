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
   
    function freeze(boxId){
// setBoxes(prevBox => prevBox.map(value => {

//         boxId === value.id ? []:'in else'
        
//     return(value)
// }))
    console.log(boxId)
    }
    let boxVar = boxes.map(value => {
        return <Box 
        boxValue = {value.val}
        handleClick={freeze}
        id = {value.id}
        key={value.id}

        />
    })
    return (
       <div className='main'>
        <div className='sub'>
            <Text />
          <div className='box-container'> {boxVar}</div>
            <Roll 
            handleClick={randomize}
            />
        </div>
        </div>
    )
}