import React from "react";
import './PlayList.css'
import Play from "../Buttons/Play";
import Song from './Song';

const PlayList = () => {
    return(
        <section className="Playlist">
            <section className="playlist-banner">
                <div className="playlist-image">
                    <img src="https://uiparadox.co.uk/templates/audiobeats/assets/media/card/cs-1.png" alt="" />
                </div>
                <div className="playlist-details">
                    <h1 className="playlist-name">Hip Hop Hymns</h1>
                    <h1 className="playlist-artist">Mia Anderson</h1>
                    <h1 className="playlist-release-date">2 weeks ago</h1>
                    <div className="playlist-tracks-likes">
                        <h1 className="playlist-tracts">15 Tracks</h1>
                        <h1 className="playlist-likes">2M likes</h1>
                    </div>
                    <Play />
                </div>
            </section>
        <div className="playlist-song">
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
        </div>
        </section>
    );
}

export default PlayList;