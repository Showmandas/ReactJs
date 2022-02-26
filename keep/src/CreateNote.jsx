import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNote = (props) => {

  const [note,setNote]=useState({
    title:'',
    content:'',
  })

  const inputVal=(event)=>{
    const {name,value}=event.target;
    setNote((prevValue)=>{
     return{
      ...prevValue,
      [name]:value
     }; 
    });
  }

  const addEvent=()=>{
    props.passNote();
  }

  return(
      <>
   <div className='main-note'>
       <form>
        <input 
        type="text"
        name='title'
        value={note.title}
        onChange={inputVal}  
        placeholder="Title"
        />
        <textarea rows=""
         column=""
         name='content'
         value={note.content}
         onChange={inputVal}  
          placeholder='Write a note...'
          />
        <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
        </Button>   
        </form>       
    </div>   
      </>
   
  );
};

export default CreateNote;
