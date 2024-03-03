import React, { useState, useEffect } from 'react'
import Card from './Card'
import { IoIosArrowForward } from "react-icons/io";


const Cards = ( { title, songs, setIsPlay, setSong } ) => {
  console.log(songs)
  const[translate, setTranslate] = useState(0)
  return (
    <section className='music-container'>
      <h1 className='title'>{ title }</h1>
      <div className='cards' style={{transform: `translateX(-${translate}px)`}}>
          { songs.map((song) => <Card
                  image = { song.images[0].url }
                  title = { song.name}
                  artist = { song.artists[0].name }
                  setIsPlay = { setIsPlay }
                  setSong = { setSong }
              /> 
          )}  
      </div>
          <button className='arrow' onClick={ () => setTranslate(translate+100) }><IoIosArrowForward /></button>  
    </section>
  )
}

export default Cards