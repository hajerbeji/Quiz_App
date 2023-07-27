import React, { useState } from 'react'
import Cars from './Cars'
import ModalFinQuiz from '../ModalFinQuiz';

const CarsList = ({showmodalfinquiz,setshowmodalfinquiz,score,setscore}) => {
    const carsquiz=[
        {
            question: "What is the primary color of the Ferrari logo?",
            options: {
                option1:{answer:"Red",iscorrect:true},
                option2:{answer:"Blue",iscorrect:false},
                option3:{answer:"Yellow",iscorrect:false},
            }
        },
        {
            question: "Which car brand is known for its luxury 'S-Class' sedan and 'G-Class' SUV models?",
            options: {
                option1:{answer:"BMW",iscorrect:false},
                option2:{answer:"Audi",iscorrect:false},
                option3:{answer:"Mercedes-Benz",iscorrect:true},
            }
        }
    ]
    
    const [quest, setquest] = useState(0);
    const next = () => {(quest < carsquiz.length - 1)?setquest(quest + 1):setshowmodalfinquiz(true) }
    
    return (
    <div>
        {(showmodalfinquiz)?<ModalFinQuiz setshowmodalfinquiz={setshowmodalfinquiz}  score={score} />: null }
        {<Cars el={carsquiz[quest]} score={score} setscore={setscore} next={next} />}
    </div>
    )
}

export default CarsList
