import React from "react";


export default function Reset (props){
return(<div className="roll-container">
<button
className="roll"
onClick={props.handleClick}
>
    Reset Game
</button>
</div>)
}