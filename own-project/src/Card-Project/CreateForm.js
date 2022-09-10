import React, { useState } from 'react'

const CreateCard = () => {

    
    
    const SubmitData=(e)=>{
        e.preventDefault();
    }

    const getValue=(val)=>{

    }


  return (
   
    <div className='container-sm p-4 mt-5' style={{width:'50%',border:'1px solid lightgray',backgroundColor:'rgba(0,0,0,0.2)'}}>
        <form onSubmit={SubmitData}>
        <div className="mb-3">
    <label className="form-label">First Name</label>
    <input type="text" className="form-control" value={fname} onChange={getValue}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Last Name</label>
    <input type="text" className="form-control" value={lname}  onChange={getValue}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={addr}  onChange={getValue}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Message Box</label>
    <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a message here" id="floatingTextarea" value={msg}  onChange={getValue}></textarea>
  <label for="floatingTextarea">Leave a message here</label>
</div>
  </div>
  
  <button type="submit" className="btn btn-primary p-2" style={{backgroundColor:'rgba(191, 85, 236,1)',border:'none'}}>Submit</button>
</form>

    </div>
  )
}

export default CreateCard