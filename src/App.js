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
        <button onClick={increment}>Increment</button>

        <button onClick={()=>setCount(count-1)}>Decrement</button>

        <button onClick={()=>setCount(0)}>Reset</button>

      </center>
    </div>
  )
}

export default App;