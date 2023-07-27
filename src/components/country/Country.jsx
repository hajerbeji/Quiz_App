import React, { useEffect, useState } from 'react'

// ------------------------------import icons from font awesome--------------------------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons';
// ------------------------------End font awesome------------------------------

import { useDispatch } from 'react-redux';
import { addfavori } from '../../slices/FavoriSlice';

const Country = ({el,next,score,setscore}) => {
    
    const [heartclicked, setheartclicked] = useState(false)
    const [favoriser, setfavoriser] = useState(false)
    const btnnn=document.getElementsByClassName("btnnn")
    const changecolor=(x,couleur)=>btnnn[x].style.backgroundColor=couleur

    const [repere, setrepere] = useState(0)
    useEffect(() => {
        for (let index = 0; index < btnnn.length; index++) {
            changecolor(index,"transparent")
        }
    }, [repere])
    const dispatch=useDispatch()
    return (
    <div className="quizbox">
        <div className='container'>
            <img src="https://t4.ftcdn.net/jpg/03/45/88/07/360_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.jpg" alt="quiz image" />
            <section>
                <h1>{el.question} </h1>
                <span className="answers">
                    <button className='btnnn' onClick={() => el.options.option1.iscorrect ? (setscore(score + 1),changecolor(0,"green")) : changecolor(0,"red")}> {el.options.option1.answer}  </button>
                    <button className='btnnn' onClick={() => el.options.option2.iscorrect ? (setscore(score + 1) ,changecolor(1,"green")) : changecolor(1,"red")}>{el.options.option2.answer} </button>
                    <button className='btnnn' onClick={() => el.options.option3.iscorrect ? (setscore(score + 1) ,changecolor(2,"green")) : changecolor(2,"red")}>{el.options.option3.answer} </button>
                </span>
                
            </section>
            
        </div>
        <div className="icons">
            <FontAwesomeIcon onClick={()=>(heartclicked)?setheartclicked(false):setheartclicked(true)} className={(heartclicked)? "like heart": "heart"} icon={faHeart} />
            <FontAwesomeIcon className='friend' icon={faFacebookMessenger} />
            <FontAwesomeIcon className='share' icon={faShare} />
            <FontAwesomeIcon onClick={()=>{setfavoriser(true);dispatch(addfavori(el))}} className={(favoriser)? "favoriser save":"save"} icon={faBookmark} />
            
            <button onClick={()=>{next();setrepere(repere+1);setheartclicked(false);setfavoriser(false)}}>Next>>>></button>
        </div>
    </div>
    )
}

export default Country
