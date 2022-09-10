import React,{useState} from 'react'
import './style.css';
const BasicTodoApp = () => {
    const todoData=[
        {
            id:0,
        Color1:'red',
        Color2:'green'
      },
      {
        id:1,
        Color1:'blue',
        Color2:'indigo'
      },
      {
        id:2,
        Color1:'brown',
        Color2:'orange'
      }
    ];
    const [datas,setDatas]=useState(todoData);
    const remElm=(id)=>{
        // alert(id);
        const myNewArr=datas.filter((curElm)=>{
            return curElm.id != id;
        })
        setDatas(myNewArr);
    }
    const remAllData=()=>{
        setDatas([])
    }
  return (
    <div>
        { 
            datas.map((curval)=>{
                return(
                    <>
                    <div className='todoDiv'>
                      <h1>Color1:{curval.Color1} & Color2:{curval.Color2}</h1>
                    <button className='butn' onClick={()=>{remElm(curval.id)}}>Remove</button>
                    </div>
                    

                    </>
                                    )
            })
        }
        <button className='btn' onClick={remAllData}>Clear</button>
    </div>
  )
}

export default BasicTodoApp