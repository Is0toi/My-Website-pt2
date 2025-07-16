import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { GoTriangleRight } from "react-icons/go";

function Canada() {
    const audioRef = useRef(null);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => console.log("Audio played"))
                .catch(error => console.error("Playback failed:", error));
        }
    };
    return (
        <div>
            <div>
                <video className = "flag" src="/flag.mp4" autoPlay loop muted />
            </div>
            <h1 className="special-title"> ALL ABOUT MY HOMETOWN CANADA!!</h1>
            <div className="audio">
                {/* <button onClick={handlePlay} className="play-button">
                    Play Anthem
                </button> */}
                <audio ref={audioRef} src="/Anthem.mp3" controls loop/>
            </div>

        </div>
    );
}

export default Canada;