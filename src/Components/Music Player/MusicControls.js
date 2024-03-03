import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { IoShuffleOutline } from "react-icons/io5";
import { FaForwardStep } from "react-icons/fa6";
import { IoMdPause } from "react-icons/io";
import { IoMdPlay } from "react-icons/io";
import { FaBackwardStep } from "react-icons/fa6";
import { SlLoop } from "react-icons/sl";

const MusicControls = ( {isPlay, setIsPlay, song, volume } ) => {
  const[currentTime, setCurrentTime] = useState(0);
  const[duration, setDuration] = useState(0);
  const audioRef = useRef();
  const sliderRef = useRef();

  let intervalId;
  useEffect(() => {
    const handlePlay = () => {
      intervalId = setInterval(() => {
        setCurrentTime(prevTime => audioRef.current.currentTime);
        sliderRef.current.value = audioRef.current.currentTime;
      }, 1000);
    };

    const handlePause = () => {
      clearInterval(intervalId);
    };

    const handleEnded = () => {
      clearInterval(intervalId);
    };
    audioRef.current.addEventListener('play', handlePlay);
    audioRef.current.addEventListener('pause', handlePause);
    audioRef.current.addEventListener('ended', handleEnded);
    return () => {
      audioRef.current.removeEventListener('play', handlePlay);
      audioRef.current.removeEventListener('pause', handlePause);
      audioRef.current.removeEventListener('ended', handleEnded);

      clearInterval(intervalId);
    };
  },[]);


    useEffect( () => {if (isPlay) {
      // setDuration(audioRef.current.duration);
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }},[isPlay])

  const changeCurrTime = (e) => {
    audioRef.current.currentTime = e.target.value;
  }

   useEffect( () => {
    if (audioRef.current){
      audioRef.current.volume = volume;
    }
    }, [volume]);



  return (
    <div className='music-controls'>
      <audio ref={audioRef} src={song} onPlay={() => setDuration(audioRef.current.duration)} type="audio/mpeg" loop/> 
      <div className='controls'>
          <button className='button-effect button'><IoShuffleOutline /></button>
          <button className='button-effect button'><FaBackwardStep /></button>
          <button className='play-pause button-effect' onClick={ () => setIsPlay(!isPlay) }>{isPlay ? <IoMdPause /> : <IoMdPlay />}</button>
          <button className='button-effect button'><FaForwardStep /></button>
          <button className='button-effect button'><SlLoop /></button>
      </div>
      <div className='duration'>
          <div className='time'>
          { Math.floor(currentTime / 60)+":"+Math.floor(currentTime%60).toString().padStart(2, '0') }
          </div>
          <div className='line'>
            <input ref={ sliderRef } min={0} max={ duration } onClick={ (e) => changeCurrTime(e)} className="slider" type="range" />
          </div>
          <div className='time'>
            { Math.floor(duration / 60)+":"+Math.floor(duration%60) }
          </div>
      </div>
    </div>
  )
}

export default MusicControls