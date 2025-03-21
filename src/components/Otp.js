import React, { useState } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Otp = () => {
    const [otp ,setotp] = useState();
    const otpvalue = (e)=>{
        setotp(e.target.value);
    }
    const submit = ()=>{
    axios({
        method:'post',
        url:'http://localhost:2350/otp',
        data:{
            otp:otp
        }
    }).then((response)=>{
        if(response.data.status===true){
            toast(response.data.message)
        }
        else{
            toast(response.data.message) 
        }
    }).catch((error)=>{
        console.log(error);
        toast('backend error')
    })
    }
  return (
    <div className='otp'>
    <div className="sec-one">
        <div className="inner-box">
            <div className="welcome">
            Enter OTP
            </div>
            <div className="sm-text">
            We have sent an OTP to your email address. Please enter it below to verify your account.
            </div>
            <div className="email">
                <label>OTP</label><br/>
                <input type='text' value={otp} onChange={otpvalue}/>
            </div>
           
            <div className="row text-center mb-3">
                <div className="col-12  p-0">
                    <button onClick={submit}>verify OTP</button>
                </div>

            </div>
            <div className="register">
            Don’t receive OTP <Link>Resend.</Link>
            </div>

        </div>
    </div>
    <Footer />
</div>
  )
}

export default Otp