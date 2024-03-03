import React from 'react'
import { HiOutlineVolumeUp } from "react-icons/hi";

const ActionBar = ( { changeVolume, song } ) => {
  return (
    <div className='actionBar'>
        <button className='button-effect button'><HiOutlineVolumeUp /></button>
        <input className='slider' type='range' onChange={ (e) => changeVolume(e)} />
    </div>
  )
}

export default ActionBar