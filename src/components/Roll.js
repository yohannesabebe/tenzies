import React from "react";


export default function Roll (props){
return(<div className="roll-container">
<button
className="roll"
onClick={props.handleClick}
>
    Roll
</button>
</div>)
}