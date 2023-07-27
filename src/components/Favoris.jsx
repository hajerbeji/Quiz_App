import React from 'react'
import { useSelector } from 'react-redux'
import FavCards from './FavCards'
import { useNavigate } from 'react-router-dom'

const Favoris = () => {
    const favs=useSelector(state=>state.favorislice.favoris)
    const navigate=useNavigate()
    return (
    <div className='list_de_favoris'>
        {favs.map((element) => ( 
            
            <div className='one_favoris'>
                <h1>{element.question} </h1>
                <h2>{element.options.option1.answer}</h2>
                <h3>{element.options.option1.iscorrect} </h3>
                <h2>{element.options.option2.answer}</h2>
                <h3>{element.options.option2.iscorrect} </h3>
                <h2>{element.options.option3.answer}</h2>
                <h3>{element.options.option3.iscorrect} </h3>  
            </div>
        ))}
        <button  onClick={()=>navigate("/main")}>Go Back Home</button>
        
    </div>
    )
}

export default Favoris
