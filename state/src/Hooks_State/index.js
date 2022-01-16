import React, {useState} from 'react';



export default function Hooks_State() {

    const [count,setCount]=useState(0);
   const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
        setCount(count-1);
    }
    return (
        <div className='maindiv'>
        <div className='countdiv'>
            <h2>Count: {count}</h2><br/>
            <div className='btndiv'>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            </div>
            
        </div>
        </div>
       
    )
}

