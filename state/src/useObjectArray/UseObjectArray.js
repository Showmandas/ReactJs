import React,{useState} from 'react'
import './style.css';

const UseObjectArray = () => {
    const[updata,setUpData]=useState({
        Name:'showman',
        Age:23
    })

    const setupdateData={
        Name:'Shanu',Age:25
    }
    // const updateData=()=>{
    //     setUpData({
    //         Name:'shanu',
    //         Age:25
    //     })
    // }
    const updateData=()=>{
        setUpData({...setupdateData})
    }
  return (
    <div>
        <h1>Name:{updata.Name} & Age:{updata.Age} </h1>
        <button className='btn' onClick={updateData}>Update data</button>
    </div>
  )
}

export default UseObjectArray