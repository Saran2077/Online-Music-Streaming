import './App.css';
import { useEffect, useState, useRef } from 'react';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import MusicPlayer from './Components/Music Player/MusicPlayer';
import NavBar from './Components/NavBar/NavBar';
import one from './Components/music/one.mp3';
import Genres from './Components/Genre/Genres';
import ArtistRow from './Components/Artist/ArtistRow';
import axios from 'axios';

const App = () => {
  const[ isPlay, setIsPlay ] = useState(false);
  const[song, setSong] = useState(one);
  const[songs, setSongs] = useState([]);
  const[token, setToken] = useState('');
  const[data, setData] = useState([]);

  const fetchData = async (token) => {
    const response = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    setSongs(response.data.albums.items)
    console.log("response", response.data.albums.items)
    
  }

  const hash = window.location.hash.split('&')[0].split('=')[1];
  useEffect(() => {
      setToken(hash)
      try {
        console.log(token)
        fetchData(token)
      }
      catch (err) {
        console.log("Error", err)
      }
    
  }, [token])

  return (
    <div className="App">
      <Login /> 
        <NavBar />
        <Main 
          setIsPlay = { setIsPlay }
          setSong = { setSong }
          songs = { songs }
        />
        <Genres />
        <ArtistRow />
        <MusicPlayer
          isPlay={isPlay}
          setIsPlay={setIsPlay}
          song = { song }
        />
      
    </div>
  );
}

export default App;
