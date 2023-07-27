import React, { useState } from 'react'
import Country from './Country'
import ModalFinQuiz from '../ModalFinQuiz';

const CountryList = ({showmodalfinquiz,setshowmodalfinquiz,score,setscore}) => {

    const countryquiz=[
        {
            question: "Which country is known as the 'Land of the Rising Sun'?",
            options: {
                option1:{answer:"China",iscorrect:false},
                option2:{answer:"Japan",iscorrect:true},
                option3:{answer:"South Corea",iscorrect:false},
            }
        },
        {
            question: "What is the capital city of Australia?",
            options: {
                option1:{answer:"Canberra",iscorrect:true},
                option2:{answer:"Melbourne",iscorrect:false},
                option3:{answer:"Sydney",iscorrect:false},
            }
        },
        {
            question: "What is the official language of Brazil?",
            options: {
                option1:{answer:"Portuguese",iscorrect:true},
                option2:{answer:"Spanish",iscorrect:false},
                option3:{answer:"English",iscorrect:false},
            }
        },
        {
            question: "What is the capital city of South Korea?",
            options: {
                option1:{answer:"Incheon",iscorrect:false},
                option2:{answer:"Busan",iscorrect:false},
                option3:{answer:"Seoul",iscorrect:true},
            }
        },
        {
            question: "What is the capital city of Argentina?",
            options: {
                option1:{answer:"Santiago",iscorrect:false},
                option2:{answer:"Buenos Aires",iscorrect:true},
                option3:{answer:"Rio de Janeiro",iscorrect:false},
            }
        }
    ]

    const [quest, setquest] = useState(0);
    const next = () => {(quest < countryquiz.length - 1)?setquest(quest + 1): setshowmodalfinquiz(true)}
    
    return (
    <div>
        {(showmodalfinquiz)?<ModalFinQuiz setshowmodalfinquiz={setshowmodalfinquiz} score={score} />: null }
        {<Country el={countryquiz[quest]} score={score} setscore={setscore} next={next} />}
        
    </div>
    )
}

export default CountryList
