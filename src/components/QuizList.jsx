import React from 'react'
import Quiz from './Quiz'
import CountryList from './country/CountryList'
import SportList from './sport/SportList'
import CarsList from './cars/CarsList'
import HistoryList from './history/HistoryList'
import LanguageList from './language/LanguageList'

const QuizList = ({index,showmodalfinquiz,setshowmodalfinquiz,score,setscore}) => {
    
    return (
    <div>
        
        {(index===0)? <CountryList showmodalfinquiz={showmodalfinquiz} setshowmodalfinquiz={setshowmodalfinquiz} score={score} setscore={setscore} />:
        (index===1)? <SportList showmodalfinquiz={showmodalfinquiz} setshowmodalfinquiz={setshowmodalfinquiz} score={score} setscore={setscore}  /> :
        (index===2)? <CarsList showmodalfinquiz={showmodalfinquiz} setshowmodalfinquiz={setshowmodalfinquiz} score={score} setscore={setscore}  /> :
        (index===3)? <HistoryList showmodalfinquiz={showmodalfinquiz} setshowmodalfinquiz={setshowmodalfinquiz} score={score} setscore={setscore}  /> :
        (index===4)? <LanguageList showmodalfinquiz={showmodalfinquiz} setshowmodalfinquiz={setshowmodalfinquiz} score={score} setscore={setscore}  /> :null}
    </div>
    )
}

export default QuizList
