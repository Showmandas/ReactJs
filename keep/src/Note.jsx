import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props) => {
  const {title,content}=props;
  return (
    
      <>
      
  <div className='note'>
      <h1>{title}</h1>
      <br />
      <p>{content}</p>
      <button className='btn'>
      <DeleteIcon className='deleteicon'/>
      </button>
     

</div>    
      </>
  
  );
};

export default Note;
