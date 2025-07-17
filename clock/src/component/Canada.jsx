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
        <div className = "canadaBackground">
            <div style={{ backgroundColor: '#d40104' }}>
                <video className="flag" src="/flag.mp4" autoPlay loop muted />
            </div>
            <h1 className="special-title"> ALL ABOUT MY HOMETOWN CANADA!!</h1>
            <div className="audio">
                <audio ref={audioRef} src="/Anthem.mp3" controls loop />
            </div>
            <a className="link-font" href="https://youtu.be/LjKQRBfH6dw?si=I5TJ6sBVo3fhrrla" target="_blank" rel="noopener noreferrer">
                <div className="canada-card" >
                    <img className="poutine" src='./poutine.jpg' alt="poutine" style={{ width: '350px', height: '250px' }}></img>
                    <h2>Poutine.</h2>
                    <p> Fries with cheese and gravy. THE BEST</p>

                </div>
            </a>

            <a className="link-font" href="https://www.youtube.com/shorts/SHB1Unpukuc" target="_blank" rel="noopener noreferrer">
                <div className="canada-card" >
                    <img className="baggedMilk" src='./bagged-milk.jpg' alt="milk" style={{ width: '350px', height: '250px' }}></img>
                    <h2>Bagged Milk</h2>
                    <p> Why do americans use cartons</p>

                </div>
            </a>

            <a className="link-font" href="https://www.youtube.com/shorts/gqraNfE9PJg" target="_blank" rel="noopener noreferrer">
                <div className="canada-card" >
                    <img className="wedges" src='./tim-hortons.jpg' alt="wedges" style={{ width: '250px', height: '215px' }}></img>
                    <h2>Tim Hortons</h2>
                    <p> Best fast food in the world I tell you. My recommendation is the wedges. Also I'm bostonian so yes I do see a dunkin' every block</p>

                </div>
            </a>

            <a className="link-font" href="https://youtube.com/shorts/EQuJggZDmXA?si=XlYoPKlhzhwUYHFa" target="_blank" rel="noopener noreferrer">
                <div className="canada-card" >
                    <img className="ketchup-chips" src='./ketchup-chip.jpg' alt="ketchup" style={{ width: '250px', height: '225px' }}></img>
                    <h2>Ketchup Chips</h2>
                    <p> I'm not sure why these are selling for $250 but I have them at my house right now and they are the best</p>

                </div>
            </a>

            <a className="link-font" href="https://youtube.com/shorts/IjLVVSSETf8?si=TeAaKD5AcnKVsy01" target="_blank" rel="noopener noreferrer">
                <div className="canada-card" >
                    <img className="aero" src='./aero.jpg' alt="aero" style={{ width: '350px', height: '205px' }}></img>
                    <h2>Aero Chocolate</h2>
                    <p> The best airy chocolate that is worth all the praise. Nobody I know that I've gave this chocolate to hates it. Canadian dubai chocolate</p>

                </div>
            </a>
            
            <a className="link-font" href="https://www.youtube.com/watch?v=B66H_hSZ_m8" target="_blank" rel="noopener noreferrer">
                <div className="canada-card" >
                    <img className="kinder" src='./surprise.jpg' alt="kinder" style={{ width: '350px', height: '205px' }}></img>
                    <h2>Kinder Surprise Eggs!</h2>
                    <p> These are peak chocolate. I'm not sure how someone could choke on such a big object, but I'm glad that people continue to be safe in America and Canada</p>

                </div>
            </a>
            
        </div>
    );
}

export default Canada;