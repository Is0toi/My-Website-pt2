import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import Discord from "./Discord";

function Home() {
    const [copySuccess, setCopySuccess] = useState("");

    const handleCopy = () => {
        navigator.clipboard.writeText("jessiewang2026@gmail.com")
            .then(() => {
                setCopySuccess("Copied!");
                setTimeout(() => setCopySuccess(""), 2000);
            })
            .catch(err => {
                console.error("Failed to copy :(", err);
                setCopySuccess("Failed");
            });


    };

    return (
        <div>
            <h1 className="home-title"> Jessie Wang // isotoi</h1>
            <div className="contact">
                <div className="contact-section">
                    <button className = "copy" onClick={handleCopy}>
                        <FaCopy />
                    </button>
                    {copySuccess && <span style={{ maringLeft: "10px", color: "green" }}>{copySuccess}</span>}
                    <CgMail />
                    <p style={{ display: "inline", marginRight: "10px" }}> jessiewang2026@gmail.com</p>
                    
                </div>
                <div >
                    <FaGithub />
                    <a href="https://github.com/Is0toi" target="_blank" rel="noopener noreferrer"> Github</a>
                </div>
                <div >
                    <FaInstagram />
                    <a href="https://www.instagram.com/jessiewang800/" target="_blank" rel="noopener noreferrer"> Instagram</a>
                </div>
                <div >
                    <FaYoutube />
                    <a href="https://www.youtube.com/@jessiewangvolleyball2026" target="_blank" rel="noopener noreferrer"> Volleyball Youtube Channel</a>
                </div>
            </div>

            <p style={{ textAlign: "center", fontSize: "1rem" }}>–––––––––––––––––––––––––––––––––––––––––––––</p>

            <div className="discordStatus">
                <Discord />

            </div>


            <p style={{ textAlign: "center", fontSize: "1rem" }}>–––––––––––––––––––––––––––––––––––––––––––––</p>
            <div className="about-me-text">
                <p > Hi! my name is Jessie Wang and I am 17 years old. I enjoy coding and volleyball. I currently live in Massachusetts. Volleyball is a passion of mine and I've won multiple awards for it like being featured on the Boston Globe. </p>
                <p >Here are some fun facts about me:</p>
            </div>
            <ul className="funfacts">
                <p>––––––––––––––––––––––––––––––––––</p>
                <li> I am Canadian and have been raised in Cananda for 9 years</li>
                <li> I've traveled around the nation like Florida, Georgia, California, and my favorite Illinois</li>
                <li> I am working on this website so that I can go to a hackathon in Boston with my boyyfriendddd!</li>
                <li> I really like cats:</li>
            </ul>
            <img className="cat-pic" src="/cat.jpg" alt="cat" />
        </div>
    );

}

export default Home;