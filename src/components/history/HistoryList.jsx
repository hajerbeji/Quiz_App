import React, { useState } from 'react'
import History from './History';
import ModalFinQuiz from '../ModalFinQuiz';

const HistoryList = ({showmodalfinquiz,setshowmodalfinquiz,score,setscore}) => {
    const historyquiz=[
        {
            question: "Who was the first President of the United States?",
            options: {
                option1:{answer:"Benjamin Franklin",iscorrect:false},
                option2:{answer:"George Washington",iscorrect:true},
                option3:{answer:"John Adams",iscorrect:false},
            }
        },
        {
            question: "Who is credited with painting the Mona Lisa?",
            options: {
                option1:{answer:"Pablo Picasso",iscorrect:false},
                option2:{answer:"Leonardo da Vinci",iscorrect:true},
                option3:{answer:"Vincent van Gogh",iscorrect:false},
            }
        },
        {
            question: "Who is famous for discovering gravity when an apple fell from a tree?",
            options: {
                option1:{answer:"Isaac Newton",iscorrect:true},
                option2:{answer:"Albert Einstein",iscorrect:false},
                option3:{answer:"Charles Darwin",iscorrect:false},
            }
        }
    ]

    const [quest, setquest] = useState(0);
    const next = () => {(quest < historyquiz.length - 1)?setquest(quest + 1):setshowmodalfinquiz(true) }
    
    return (
    <div>
        {(showmodalfinquiz)?<ModalFinQuiz setshowmodalfinquiz={setshowmodalfinquiz} score={score} />: null }
        {<History el={historyquiz[quest]} score={score} setscore={setscore} next={next} />}
    </div>
    )
}

export default HistoryList
