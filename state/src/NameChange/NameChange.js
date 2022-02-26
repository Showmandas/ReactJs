import React,{useState} from 'react'
import './style.css';
const NameChange = () => {
    var iniName='Showman Das';
    const[name,setName]=useState(iniName);
  return (
    <div>
        <h1>{name}</h1>
        <button className='btn' onClick={()=>{setName('Bunny')}}>Click to change name</button>
    </div>
  )
}

export default NameChange