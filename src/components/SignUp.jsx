import React, { useState } from 'react'
import video from '../assets/bg.mp4'
import { useNavigate } from 'react-router-dom'
import Main from './Main'
const SignUp = ({setusername}) => {
    const navigate=useNavigate()
    return (
    <div className='login signup'>
        <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
        </video>
        <div className='container'>
            <div className='left'>
                <h1>Sign Up</h1>
                <div className="email">
                    <label>UserName</label>
                    <input type="text" onChange={(e)=>setusername(e.target.value)}  />
                </div>
                <div className="email">
                    <label>Email</label>
                    <input type="email"  />
                </div>
                <div className="password">
                    <label>Password</label>
                    <input type="password"  />
                </div>
                <div className='password'>
                    <label>Confirm password</label>
                    <input type="password"  />
                </div>
                
                <button className='btn1' onClick={()=>navigate('/main')}>Sign Up</button>
                <button className='btn2' onClick={()=>navigate('/')} > Login</button>
            </div>

            <div className="right">
                <h1>Welcome </h1>
                <h2>It's greeeeeeeat<br/> to have you here!<br/> Let's begiiiiiiin <br/>your adventure with us.<br/>Let's Staaaaaart</h2>
                <h1></h1>
            </div>
        </div>
    </div>
    )
}

export default SignUp
