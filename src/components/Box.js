import React from "react";

export default function Box(props){

    return(
        <div className="boxes">
          {
            <div 
                   className="box"
                   onClick={()=>props.handleClick(props.id)}
                   > 
                    {props.boxValue}
                   </div>
            // props.boxState.map(box => {
            //     return(
            //        <div 
            //        className="box"
            //        onClick={()=>props.handleClick(props.id)}
            //        > 
            //         {box}
            //        </div>
            //     )
            // })
          }
         
        </div>
    )
}