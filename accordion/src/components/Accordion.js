import React,{useState} from 'react';
import { questions } from './api';
import MyAccordion from './MyAccordion';

const Accordion = () => {
   const [data,setData]=useState(questions);
  return <>
  <section className='main-div'>
  <h1>React Interview Question</h1>
      {
     data.map((curData)=>{
         const {id}=curData;
       return <MyAccordion key={id} {...curData} />
     })
  }             
  </section>
  
  </>;
};

export default Accordion;
