import React, { useRef, useEffect, useState } from 'react';
import Heading from './Heading.js'
import './Main.css'
import Cards from './Cards.js'
import PlayList from '../PlayList/PlayList.js';

const Main = ( { setIsPlay, setSong, songs } ) => {
  const song = songs[0]
  console.log(songs)
  return (
    <section className='flex'>
        <Heading 
          song = { song }
        />
        <div className='main-flex'>
          <div className='first'>
            <PlayList />
          </div>
          <div className='second'>
              <Cards
              title = "Weekly Trending"
              songs = { songs }
              setIsPlay = { setIsPlay }
              setSong = { setSong }
            />
              <Cards
              title = "Montly Trending"
              songs = { songs }
              setIsPlay = { setIsPlay }
              setSong = { setSong }
            />
          </div>
        </div>
      </section>
            
        
  )
}

export default Main