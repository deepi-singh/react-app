import React, { useState } from "react";

function App(){

  const[count ,setCount] =useState(0);

  const increment=()=>{

    setCount(count+1);
  }

  return(

    <div>
      <center>
        <h3 className="h3class">A simple counter app</h3>

        <h4 className="h4class">Let's count with fun</h4>

        <>{count}</><br></br>
        <button className="inc" onClick={increment}>Increment</button>

        <button className="dec" onClick={()=>setCount(count-1)}>Decrement</button>

        <button className="res" onClick={()=>setCount(0)}>Reset</button>

        <p>A new changes are effected here</p>

      </center>
    </div>
  )
}

export default App;