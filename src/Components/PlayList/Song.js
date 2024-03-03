import React from 'react';
import { FaPlay } from "react-icons/fa";
import { BsSuitHeart } from "react-icons/bs";

const Song = () => {
  return (
    <div className='Song'>
      <div>
        <div className='song-container'>
            <div className='song-container-image'><img src="https://uiparadox.co.uk/templates/audiobeats/assets/media/songs/s-1.png" /></div>
            <div className='song-container-name'>
                <div>Harmonic Riot</div>
                <div className='artist-name'>Jennifer Kelly</div>
            </div>
        </div>
      </div> 
      <div className='song-duration'>
        <div className='playlist-song-duration'>03:20</div>
        <button className='playlist-play-button'><FaPlay /></button>
        <button className='playlist-like-button'><BsSuitHeart /></button>
      </div>
    </div>
  )
}

export default Song;