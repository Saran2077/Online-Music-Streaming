import './Button.css';
import { FaPlay } from "react-icons/fa6";
import { MdOutlinePlaylistAdd } from "react-icons/md";

const AddToPlaylist = () => {
    return(
        <button className="main-button addplaylist-button">
            <div className='m-button'><MdOutlinePlaylistAdd /></div>
            <div className='m-button'>Add to playlist</div>
        </button>
    );
}

export default AddToPlaylist;