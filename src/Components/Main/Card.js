import React from 'react'
import { FaPlay } from "react-icons/fa";
import two from './../music/two.mp3';

const Card = ( { image, title, artist, setIsPlay, setSong } ) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={ image } />
        <button className='main-play-button' onClick={() => {
                                                    setIsPlay(true)
                                                    setSong(two)
                                                    }}><FaPlay /></button>
          <div className='card-details'>
            <div className='card-title'>
                { title }
            </div>
            <div className='main-artist'>
                { artist }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card