import React,{useState} from 'react'
import './style.css';
const UseStateArray = () => {
    const bio=[
        {
            id:1,Name:'showman',Age:'23'
        },
        {
            id:2,Name:'shantu',Age:'24'
        }
    ]
    const [bioArray,setBioArray]=useState(bio);

    const clearData=()=>{
        setBioArray([])
    }
  return (
    <div>
        
        {
            bioArray.map((currElm)=>{
                return <h1>Name:{currElm.Name} & Age:{currElm.Age}</h1>
            })
        }
        <button className='btn' onClick={clearData}>Clear data</button>
    </div>
  )
}

export default UseStateArray