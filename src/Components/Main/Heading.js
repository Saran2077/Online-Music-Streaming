import React from 'react';
import Play from '../Buttons/Play';
import AddToPlaylist from '../Buttons/AddToPlaylist';
import ThreeDot from '../Buttons/ThreeDot';

const Heading = ( song ) => {
  console.log("Heading")
  return(
    <div className='banner'>
      <div className='banner-img'>
        <img className='banner-image' src={song.images ? song.images[0].url : "https://uiparadox.co.uk/templates/audiobeats/assets/media/banner/image.png"} />
      
        <div className='banner-contents'>
          <div className='banner-heading'>
            Moon Light Dust 2023
          </div>
          <div className='flex-artist'>
            <div className='artist'>
              <div className='artist-image'>
                <img src="https://uiparadox.co.uk/templates/audiobeats/assets/media/banner/login-signup.png" />
              </div>
              <div className='artist-details'>
                <div className='artist-head'>Artist</div>
                <div className='artist-name'>
                  { song.name }
                </div>
              </div>
            </div>
            <div className='artist'>
              <div className='artist-details'>
                <div className='artist-head'>Album Info</div>
                <div className='artist-name'>
                  15Tracks. 2M+ Likes
                </div>
              </div>
            </div>
          </div>
          <span className='duration'>25min 50sec</span>
          <div className='banner-duration'><span className='orange-text'>Rhythm Revolution</span>. 2 Weeks ago</div>
          <div className='banner-features'>Features:Elysia Rayne, Jaxon Grey, Harper Valencia</div>
          <div className='banner-buttons'>
            <Play />
            <AddToPlaylist />
            <ThreeDot />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Heading