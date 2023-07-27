import React, { useState } from 'react'
import Sport from './Sport'
import ModalFinQuiz from '../ModalFinQuiz';



const SportList = ({showmodalfinquiz,setshowmodalfinquiz,score,setscore}) => {
    const sportquiz=[
        {
            question: "How many players are there on a standard football team?",
            options: {
                option1:{answer:"11",iscorrect:true},
                option2:{answer:"8",iscorrect:false},
                option3:{answer:"10",iscorrect:false},
            }
        },
        {
            question: "How often is the FIFA World Cup held?",
            options: {
                option1:{answer:"Every 2 years",iscorrect:false},
                option2:{answer:"Every 5 years",iscorrect:false},
                option3:{answer:"Every 4 years",iscorrect:true},
            }
        },
        {
            question: "Which two teams play in the 'El Clásico' football match?",
            options: {
                option1:{answer:"Manchester United and Manchester City",iscorrect:false},
                option2:{answer:"FC Barcelona and Real Madrid CF",iscorrect:true},
                option3:{answer:"AC Milan and Inter Milan",iscorrect:false},
            }
        },
        {
            question: "Which country has won the most FIFA World Cup titles?",
            options: {
                option1:{answer:"Brazil",iscorrect:true},  // 5 times
                option2:{answer:"Argentina",iscorrect:false},
                option3:{answer:"Germany",iscorrect:false},
            }
        }
    ]

    const [quest, setquest] = useState(0);
    const next = () => {(quest < sportquiz.length - 1)?setquest(quest + 1):setshowmodalfinquiz(true)}
    
    return (
    <div>
        {(showmodalfinquiz)?<ModalFinQuiz setshowmodalfinquiz={setshowmodalfinquiz} score={score} />: null }
        {<Sport el={sportquiz[quest]} score={score} setscore={setscore} next={next} />}
    </div>
    )
}

export default SportList
