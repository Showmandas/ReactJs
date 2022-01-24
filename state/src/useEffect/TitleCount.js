import React, {useState, useEffect } from 'react';

const TitleCount = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        if(count >= 1){
            document.title=`state (${count})`;
        }else{
            document.title=`state `;
        }
    },[count])

  return <div>
      <p>{count}</p>
      <button onClick={()=>{
          setCount(count+1);
      }}>Click</button> 
       </div>;
};

export default TitleCount;
