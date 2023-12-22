import React, {useState} from "react";
const Counter =()=>{
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{if(count>0){
        setCount(count-1);
    }
    }
    return(
        <div>
            <button onClick={increment}>Increment</button>
            <h3>Count:{count}</h3>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counter;