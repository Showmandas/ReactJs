import React,{useState,useEffect} from 'react';

const ScreenSize = () => {
    const [widthSize,setWidthSize]=useState(window.screen.width);
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWidthSize(window.innerWidth);
        })
        return()=>{
            window.removeEventListener('resize',()=>{
                setWidthSize(window.innerWidth);
            })
        }
    })
  return <div>
      <h1>The actual screen size:</h1>
      <p>{widthSize}</p>
  </div>;
};

export default ScreenSize;
