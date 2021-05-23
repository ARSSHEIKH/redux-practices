import React from "react";

export default function UseState_and_useEffect({counter}){
    let [smCounter, setSmCounter] = React.useState(counter)
    return(
        <div>
            
      <h1>{smCounter}</h1>
      <button onClick={()=>{setSmCounter(++smCounter)}}>Increase</button>
      <button onClick={()=>{setSmCounter(--smCounter)}}>Decrease</button>
        </div>
    )
}