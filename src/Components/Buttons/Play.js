import './Button.css';
import { FaPlay } from "react-icons/fa6";

const Play = () => {
    console.log("Play 1")
    return(
        <button className="main-p-button main-button">
            <div className='p-button'><FaPlay /></div>
            <div className='p-button'>Play</div>
        </button>
    );
}

export default Play;