import React from 'react'
import video from '../assets/BGsidebar.mp4'

// ------------------------------import icons from font awesome--------------------------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import QuizList from './QuizList';
// ------------------------------End font awesome--------------------------------------------------------

import { useNavigate } from 'react-router-dom';
import Login from './Login'
import Profil from './Profil'


const Sidebar = ({setindex,score,username}) => {
    const navigate=useNavigate()
    return (
    <div className='sidebar'>
        <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
        </video>
        <span>
            <h1 className='score'>Score : {score} <FontAwesomeIcon icon={faTrophy} /></h1>
            <h1>{username} </h1>
            <h2 onClick={()=>navigate('/')} className='logout'>LogOut <FontAwesomeIcon icon={faRightFromBracket} /></h2>
            <h2 onClick={()=>navigate('/profil')} >Profil</h2>
            <h2  onClick={()=>navigate("/favoris")}>Favoris</h2>
            <h2>Contact</h2>
            <details>
                <summary>Type of Quizs</summary>
                <section>
                <h2 onClick={() => setindex(0)}>Country</h2>
                <h2 onClick={() => setindex(1)} >Sport</h2>
                <h2 onClick={() => setindex(2)} >Cars</h2>
                <h2 onClick={() => setindex(3)} >History</h2>
                <h2 onClick={() => setindex(4)} >Language</h2>
                </section>
            </details>
        </span>
        
    </div>
    )
}

export default Sidebar
