import React from "react";

export default function Box(props){
    return(
        <div className="boxes">
          {
            
            props.boxState.map(box => {
                return(
                   <div 
                   className="box"
                  //  onClick={()=>props.handleClick()}
                   > 
                    {box}
                   </div>
                )
            })
          }
         
        </div>
    )
}