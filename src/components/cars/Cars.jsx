import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons';


const Cars = ({el,next,score,setscore}) => {
    const [heartclicked, setheartclicked] = useState(false)
    const [favoriser, setfavoriser] = useState(false)
    return (
    <div className="quizbox">
        <div className='container'>
            <img src="https://t4.ftcdn.net/jpg/03/45/88/07/360_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.jpg" alt="quiz image" />
            <section>
                <h1>{el.question} </h1>
                <span className="answers">
                    <button onClick={() => el.options.option1.iscorrect ? (setscore(score + 1) , next()) : next()}> {el.options.option1.answer}  </button>
                    <button onClick={() => el.options.option2.iscorrect ? (setscore(score + 1) , next()) : next()}>{el.options.option2.answer} </button>
                    <button onClick={() => el.options.option3.iscorrect ? (setscore(score + 1) , next()) : next()}>{el.options.option3.answer} </button>
                </span>
            </section>
            
        </div>
        <div className="icons">
            <FontAwesomeIcon onClick={()=>(heartclicked)?setheartclicked(false):setheartclicked(true)} className={(heartclicked)? "like heart": "heart"} icon={faHeart} />
            <FontAwesomeIcon className='friend' icon={faFacebookMessenger} />
            <FontAwesomeIcon className='share' icon={faShare} />
            <FontAwesomeIcon onClick={()=>setfavoriser(true)} className={(favoriser)? "favoriser save":"save"} icon={faBookmark} />
            <button onClick={next}>`Next>>>>`</button>
        </div>
        
    </div>
    )
}

export default Cars
