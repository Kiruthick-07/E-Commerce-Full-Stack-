import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Signup = () => {
 const[username,setuserName] = useState("");
 const[userpassword1,setuserEmail] = useState("");
 const[userpassword2,setuserPassword]= useState("");
 const navigate = useNavigate();
 const handleSubmit = () => {
   
}
       const headertext={
          textAlign:'center',
          lineHeight:'0.6',
          marginTop:'60px',
          paddingTop:'20px',
        };
        const login={
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          width:'500px',
          Height:'700px',
          borderRadius:'10px',
        };
        const inputbox={
           width: '400px',
           padding: '12px 15px',
           borderRadius: '10px',
           border: '1px solid #e0e0e0',
        marginBottom: '20px',
        fontSize: '14px',
        outline: 'none',
        backgroundColor: '#f9f9f9'
        };
        const subheading={
          textAlign:'left',
          marginLeft:'40px',
        };
        const buttonstyle={
          width: '430px',
           padding: '12px 15px',
           borderRadius: '10px',
           border: '1px solid #e0e0e0',
           marginBottom: '20px',
           fontSize: '14px',
          outline: 'none',
          backgroundColor:'black',
          color:'white',
          marginTop:'10px',
          cursor:'pointer',
        };
        const emailcon={
          lineHeight:'0.5',
          marginTop:'50px',
        };
        const pswcon={
          lineHeight:'0.5',
        };
  return (
     <center>
        <div style={login}>
          <div style={headertext}>
            <h1>Create an Account</h1>
            <p style={{color: '#888'}}> Please enter your credentials to signup</p>
          </div>
          <div style={emailcon}>
            <h4 style={subheading}>Username</h4>
            <input type='text' style={inputbox}  placeholder='Enter your username' onChange={(e)=> setuserName(e.target.value)}></input>
          </div>
          <div style={pswcon}>
            <h4 style={subheading}>Email Address</h4>
            <input   type='email' placeholder='Enter the email'style={inputbox} onChange={(e)=>setuserEmail(e.target.value)} ></input>
          </div>
          <div style={pswcon}>
            <h4 style={subheading}>Password</h4>
            <input  type='password' placeholder='Enter the password'style={inputbox} onChange={(e)=>setuserPassword(e.target.value)} ></input>
          </div>
          <div>
            <button style={buttonstyle} onClick={handleSubmit}>Signup</button>
            <p style={{lineHeight:'0'}}>or</p>
          </div>
          <p style={{paddingBottom:'20px'}}>Had an account already ?<Link to="/login"  style={{textDecoration:'underline' , color:'blue',cursor:'pointer'}}>  Login</Link></p>
          
        </div>
        </center>
  )
}

export default Signup