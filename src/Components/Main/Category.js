import React from 'react'

const Category = ( { image, text }) => {
  return (
    <section className='category'>
        <img className='image' src={ image }/>
        <div className='name'><h2>{ text }</h2></div>
    </section>
  )
}

export default Category