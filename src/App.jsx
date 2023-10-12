import React from "react";

function App(){

    const[count,setCount] = React.useState(0);

    function increment(){
        return setCount(count+1);
    }
    function decremet(){
        return setCount(count-1);
    }
    
    return(
        <div className="container">
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decremet}>-</button>
        </div>
    )
}

export default App;