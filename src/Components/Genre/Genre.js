import './Genre.css';

 const Genre = () => {
    return(
        <div className='Genre'>
            <div className='Genre-details'>
                <div className='genre-name'>Hip Hop</div>
                <div className='genre-tracks'>Tracks 1590</div>
            </div>
            <div className='genre-photo'>
                <img src="https://uiparadox.co.uk/templates/audiobeats/assets/media/card/cs-1.png" alt="" />
            </div>
        </div>
    );
 }

 export default Genre;