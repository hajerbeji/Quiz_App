import React, { useState } from 'react'
import Language from './Language';
import ModalFinQuiz from '../ModalFinQuiz';

const LanguageList = ({showmodalfinquiz,setshowmodalfinquiz,score,setscore}) => {
    const languagequiz=[
        {
            question: "What is the most widely spoken language in the world?",
            options: {
                option1:{answer:"English",iscorrect:false},
                option2:{answer:"Spanish",iscorrect:false},
                option3:{answer:"Chinese",iscorrect:true},
            }
        },
        {
            question: "Guess this language : 'Annyeonghaseyo, na-neun Hangug-eo hal su iss-eoyo.'",
            options: {
                option1:{answer:"Hindi",iscorrect:false},
                option2:{answer:"Korean",iscorrect:true},
                option3:{answer:"Turkish",iscorrect:false},
            }
        },
        {
            question: "Guess this language : 'Privet, kak dela?'",
            options: {
                option1:{answer:"English",iscorrect:false},
                option2:{answer:"Turkish",iscorrect:false},
                option3:{answer:"Russian",iscorrect:true},
            }
        }
    ]

    const [quest, setquest] = useState(0);
    const next = () => {(quest < languagequiz.length - 1)?setquest(quest + 1):setshowmodalfinquiz(true) }
    
    return (
    <div>
        {(showmodalfinquiz)?<ModalFinQuiz setshowmodalfinquiz={setshowmodalfinquiz} score={score} />: null }
        {<Language el={languagequiz[quest]} score={score} setscore={setscore} next={next} />}
    </div>
    )
}

export default LanguageList
