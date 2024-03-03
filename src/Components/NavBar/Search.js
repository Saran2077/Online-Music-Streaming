import React from "react";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
    return(
        <div className="nav-search">
            <input id='search' type="search" placeholder="Artist, Track"/>
            <button className="nav-search-button"><IoMdSearch /></button>
        </div>
    );
}

export default Search;