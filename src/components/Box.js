import React from "react";

export default function Box(props){
const styleVar ={ backgroundColor:'#59E391'}
    return(
        <div className="boxes" >
          {
            <div 
                   className="box"
                   onClick={()=>props.handleClick(props.id)}
                   style={props.boolVar? styleVar:{}}
                   > 
                    {props.boxValue}
                   </div>
          }
         
        </div>
    )
}