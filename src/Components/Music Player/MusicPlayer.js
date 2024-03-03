import React, { useState } from 'react'
import Music from './Music';
import MusicControls from './MusicControls';
import './MusicPlayer.css'
import ActionBar from './ActionBar';

const MusicPlayer = ( { isPlay, setIsPlay, song } ) => {
  const[volume, setVolume] = useState(0.5);
  const changeVolume = (e) => setVolume(e.target.value/100);
  
  return (
    <div className='musicPlayer'>
        <Music />
        <MusicControls 
          isPlay = { isPlay }
          setIsPlay = { setIsPlay }
          song = { song }
          volume = { volume }
        />
        <ActionBar 
          changeVolume = { changeVolume }
          song = { song }
        />
    </div>
  )
}

export default MusicPlayer