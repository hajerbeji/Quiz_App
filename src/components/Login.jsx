import React from 'react'
import video from '../assets/bg.mp4'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate()
    
    return (
    <div className='login'>
        <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
        </video>
        <div className='container'>
            <div className='left'>
                <h1>Login</h1>
                <div className="email">
                    <label>Email</label>
                    <input type="email"  />
                </div>
                <div className="password">
                    <label>Password</label>
                    <input type="password"  />
                </div>
                <button className='btn1' onClick={()=>navigate('/main')}>Login</button>
                <button className='btn2' onClick={()=>navigate('/signup')} > Sign Up </button>
            </div>

            <div className="right">
                <h1>Welcome Back</h1>
                <h2>Good to see you <br/> agaiiiiiiiiin! <br/>Please log in <br/>to access your account.<br/>Let's Staaaaaart</h2>
                <h1></h1>
            </div>
        </div>
    </div>
    )
}

export default Login
