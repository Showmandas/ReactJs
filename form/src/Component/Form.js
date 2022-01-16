import React,{useState} from 'react'

export default function Form() {

    const [name,setName]=useState('');
    const [fullName,setfullName]=useState('');

     const inputEvent=(event)=>{
         setName(event.target.value);
     }

     const onSubmit=()=>{
       setfullName(name);
     }


    return (
      <>
      <div>
        <h1>Hello {fullName}</h1>
        <input 
        type="text"
        placeholder="Enter your name"
        onChange={inputEvent}
        value={name}
        /><br />
        <button type='submit' onClick={onSubmit}>Click me</button>
      </div> 
         </>     
      );
}
