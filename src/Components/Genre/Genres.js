import React from 'react'
import Genre from './Genre'
import './Genre.css';

const Genres = () => {
  return (
    <div className='genre-container'>
      <div className='top-genre'>Top Genres</div>
      <div className='Genres'>
          <Genre />
          <Genre />
          <Genre />
          <Genre />
          <Genre />
          <Genre />
          <Genre />
          <Genre />
      </div>
    </div>
  )
}

export default Genres