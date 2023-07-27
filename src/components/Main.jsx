import React from 'react'
import Sidebar from './Sidebar'
import QuizList from './QuizList'

const Main = ({setindex,index,showmodalfinquiz,setshowmodalfinquiz,favoris,setfavoris,score,setscore,username}) => {
    return (
    <div className='main'>
        <span className="part1">
            <Sidebar index={index} setindex={setindex} score={score} username={username} /> 
        </span>
        <span className="part2">
            <QuizList index={index} showmodalfinquiz={showmodalfinquiz} setshowmodalfinquiz={setshowmodalfinquiz} favoris={favoris} setfavoris={setfavoris}  score={score} setscore={setscore}  /> 
        </span>
    </div>
    )
}

export default Main
