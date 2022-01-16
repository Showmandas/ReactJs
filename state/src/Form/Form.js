import React,{useState} from 'react'
import style from './form.module.css';

export default function Form() {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    // const [name,setPassword]=useState('');

    const handleName=(e)=>{
        setName(e.target.value);
    }
    
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    
    const handleSubmit=(e)={
        // console.log();
        e.preventDefault();
    }
    return (
        <div>
            <h2>Registration</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" id="name" required onChange={handleName}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" id="email"  onChange={handleEmail} required/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" id="password"  onChange={handlePassword} required/>
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
            <div>
                <h3>{name}</h3>
                <h3>{email}</h3>
            </div>
        </div>
    )
}
