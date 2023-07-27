import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Main from './Main'
const Profil = ({username,score}) => {
    const [profilphoto, setprofilphoto] = useState("https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg")
    const navigate=useNavigate()
    return (
    <div>
        <div className='profil'>
            <div className="sous_profil">
                <img src={profilphoto} alt="profil photo" />
            </div>
            <div className="btn_container">
                <button className='choose'><input type="file" name="" id="" placeholder="Select a profile photo" onChange={(e)=>setprofilphoto(URL.createObjectURL(e.target.files[0]))}  /></button>
            </div>
        </div>
        <div className="description">
            <h1>Hello {username} </h1>
            <h1>Your Score : {score} </h1>
            <button onClick={()=>navigate('/main')} >>>>>Back To Home</button>
        </div>
    </div>
    )
}

export default Profil
