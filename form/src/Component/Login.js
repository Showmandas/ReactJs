import React,{useState} from 'react'

const Login = () => {

    const [formVal,setFormVal]=useState({
        username:"",
        email:"",
        password:"",
     })

     const handleChange=(e)=>{
         const { name , value } = e.target;
         setFormVal({
             ...formVal,
             [name]:value

         })
     }

     const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(e.target);
     }

  return (
    <div className='container'>
     <pre>{JSON.stringify(formVal,undefined,2)}</pre>
        <form onSubmit={handleSubmit}>
            <h3>Login Form</h3>
            <div className="login">
                <hr />
                <div className="field">
                    <input 
                    type="text"
                    name='username'
                    placeholder='username'
                    value={formVal.username}
                    onChange={handleChange}
                    />
                </div><br/><br/>
                <div className="field">
                    <input 
                    type="email"
                    name='email'
                    placeholder='email'
                    value={formVal.email}
                    onChange={handleChange}
                    />
                </div><br/><br/>
                <div className="field">
                    <input 
                    type="password"
                    name='password'
                    placeholder='password'
                    value={formVal.password}
                    onChange={handleChange}
                    />
                </div><br/><br/>
                <div className="field">
                    <input type="submit" value="Submit"/>
                </div>
            </div>
        </form>
     <p></p>
    </div>
  )
}

export default Login;