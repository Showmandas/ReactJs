import React,{useState} from 'react'
import './style.css';
const NameChange = () => {
    var iniName='Showman Das';
    var updtName='Bunny'
    const[name,setName]=useState(iniName);
    const changeName=()=>{
        // if(name===iniName){
        //     setName(updtName);
        // }else if(name===updtName){
        //     setName(iniName);
        // }
        let val=name;
        (val===iniName)?setName(updtName):setName(iniName);
    }
  return (
    <div>
        <h1>{name}</h1>
        <button className='btn' onClick={changeName}>Click to change name</button>
    </div>
  )
}

export default NameChange