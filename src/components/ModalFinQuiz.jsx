import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ModalFinQuiz = ({setshowmodalfinquiz,score}) => {
    const [star, setstar] = useState([false,false,false,false,false])
    const clickedstar=(j)=>{
        const newstar = [...star];
        newstar[j]=!newstar[j];
        setstar(newstar);
    }
    return (
    <div className='modal'>
        <div className="box_modal">
            <button className='delete' onClick={()=>setshowmodalfinquiz(false)} >x</button>
            <h1>Yaaaaay Quiz Completed.</h1>
            <h1>Your Score: {score} </h1>
            <div className="rating">
                <h2>Rate Your Experiende Please.</h2>
                <span>
                    <FontAwesomeIcon icon={faStar} onClick={()=>clickedstar(0)} className={star[0] ? 'clicked' : ''} />
                    <FontAwesomeIcon icon={faStar} onClick={()=>clickedstar(1)} className={star[1] ? 'clicked' : ''} />
                    <FontAwesomeIcon icon={faStar} onClick={()=>clickedstar(2)} className={star[2] ? 'clicked' : ''} />
                    <FontAwesomeIcon icon={faStar} onClick={()=>clickedstar(3)} className={star[3] ? 'clicked' : ''} />
                    <FontAwesomeIcon icon={faStar} onClick={()=>clickedstar(4)} className={star[4] ? 'clicked' : ''} />
                </span>
            </div>
            <div className="btns">
                <button className="cancel" onClick={()=>setshowmodalfinquiz(false)} >Cancel</button>
                <button className="send" onClick={()=>setshowmodalfinquiz(false)} >Send</button>
            </div>
        </div>
    </div>
    )
}

export default ModalFinQuiz
