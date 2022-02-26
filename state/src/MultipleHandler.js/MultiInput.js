import React,{useState} from 'react';

const MultiInput = () => {
    const [fullname,setFullname]=useState({
        fname : '',
        lname : '',
        email : ''
    });

    const inpEvnt=(event)=>{
    
      const {value,name}=event.target;

      setFullname((preVal)=>{
        console.log(preVal);
        return{
          ...preVal,
          [name]: value,
        }

        //   if(name==="fname"){
        //       return {fname : value,
        //       lname : preVal.lname,
        //       email : preVal.email
        //       }
        //   }else if(name==="lname"){
        //       return {
        //         fname : preVal.fname,
        //         lname : value,
        //         email : preVal.email
        //       }
        //     }
        //        else if(name==="email"){
        //         return {
        //           fname : preVal.fname,
        //           lname : preVal.lname,
        //           email : value
        //         }
            
        // }
      })
    }

    const onSubmit=(event)=>{
     event.preventDefault();
    }


  return <div>
      <form onSubmit={onSubmit}>
          <div>
              <h1>Hello {fullname.fname} {fullname.lname}</h1>
              <p>{fullname.email}</p>
              <input type="text"
               placeholder="Enter first name"
               name="fname"
               onChange={inpEvnt}
               value={fullname.fname}
               /><br />
                 <input type="text"
               placeholder="Enter last name"
               name="lname"
               onChange={inpEvnt}
               value={fullname.lname}
               /><br />
               <br />
                 <input type="text"
               placeholder="Enter Email"
               name="email"
               onChange={inpEvnt}
               value={fullname.email}
               /><br />
               <button>Submit</button>
          </div>

      </form>
  </div>;
};

export default MultiInput;
