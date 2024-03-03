import React from "react";
import './NavBar.css';
import Search from "./Search";

const NavBar = () => {
    return(
        <nav className="NavBar">
            <div className="nav-logo">
                <img src="" />
                Spotify
                <div className="nav-contents">
                    <div className="nav-content">
                        <li>Home</li>
                        <li>Releases</li>
                        <li>Artists</li>
                        <li>Pages</li>
                    </div>
                </div>
            </div>
            <Search />
            
        </nav>
    );
}

export default NavBar;