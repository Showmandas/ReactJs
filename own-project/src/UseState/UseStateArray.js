import React, { useState } from 'react'

const UseStateArray = () => {
    const Data=[
        {
            id:1,
            name:'pilu',
            gender:'female'
        },
        {
            id:2,
            name:'tilu',
            gender:'male'
        },
        {
            id:3,
            name:'nilu',
            gender:'female'
        },
        {
            id:4,
            name:'kilu',
            gender:'male'
        },
    ]

    const [data,setData]=useState(Data);

    const clearData=(clrdata)=>{
        setData([]);

    }

  return (
    <>
    {
        data.map((datas)=>{
            return(
                <div className="tableData">
                    <table>
                        <tr>
                            <td>{datas.id}</td>
                            <td>{datas.name}</td>
                            <td>{datas.gender}</td>
                        </tr>
                    </table>
                    
                </div>
             
            )
        })
    }
       <button className='btn' onClick={clearData}>Clear</button>
    </>
  )
}

export default UseStateArray