import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios';
import { toast } from 'react-toastify';

const Forgot = () => {
    const [email,setemail]=useState();
    let naviagte = useNavigate();
    const newemail = (e)=>{
        setemail(e.target.value)
    }
    const submit = ()=>{
        axios({
            method:'post',
            url:"http://localhost:2350/forgot",
            data:{
                email:email
            }
        }).then((response)=>{
            if(response.data.status===true){
                toast(response.data.message);
                naviagte('/otp')
            }
            else{
                toast(response.data.message);
            }
        }).catch((error)=>{
            toast('backend problem');
            console.log(error);
            
        })
    }
  return (
    <div className='forgot'>
    <div className="sec-one">
        <div className="inner-box">
            <div className="welcome">
                Welcome Back!
            </div>
            <div className="sm-text">
            Please enter your email address to receive a verification code.
            </div>
            <div className="email">
                <label>Enter Your Email</label><br/>
                <input type='email' value={email} onChange={newemail}/>
            </div>
           
            <div className="btn">
            <button onClick={submit}>Send OTP</button>
            </div>
            <div className="register">
            Don’t have an account? <Link to='/signup' >Register.</Link>
            </div>

        </div>
    </div>
    <Footer />
</div>
  )
}

export default Forgot