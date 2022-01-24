import React,{useState,useEffect} from 'react';
const useEffectEx=() => {

    const [count,setCount]=useState(0);

    useEffect(()=>{
        //calls with only first render
        console.log("useEffect")
    },[]);

    return(
        <div>
           {console.log("rendering")}
 <h1>Count : {count}</h1>
 <button onClick={()=>{setCount(count+1);}}>+</button>
         </div> 
       
    )
}

export default useEffectEx;