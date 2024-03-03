import React from 'react';
import './ArtistRow.css';
import Artist from './Artist';

const ArtistRow = () => {
  return (
    <div className='artist-row'>
      <h1>Featured Artist</h1>
      <div className='ArtistRow'>
          <Artist />
          <Artist />
          <Artist />
          <Artist />
          <Artist />
          <Artist />   
      </div>
    </div>
  )
}

export default ArtistRow;