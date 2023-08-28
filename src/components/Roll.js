import React from "react";


export default function Roll (props){
return(<div>
<button
className="roll"
onClick={props.handleClick}
>
    Roll
</button>
</div>)
}