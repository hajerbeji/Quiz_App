import React from 'react'

const FavCards = ({element}) => {
  return (
    <div className='one_favoris'>
                <h1>{element.question} </h1>
                <h2>{element.options.option1.answer}</h2>
                <h3>{element.options.option1.iscorrect} </h3>
                <h2>{element.options.option2.answer}</h2>
                <h3>{element.options.option2.iscorrect} </h3>
                <h2>{element.options.option3.answer}</h2>
                <h3>{element.options.option3.iscorrect} </h3>
            </div>
  )
}

export default FavCards
