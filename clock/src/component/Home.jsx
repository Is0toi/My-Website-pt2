import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Home() {
    return (
        <div>
            <h1 className="home-title"> Jessie Wang // isotoi</h1>
            <div className = "contact">
                <div className = "contact-section">
                    <CgMail/>
                    <p> jessicastalentlife@gmail.com</p>
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
            <p style={{ textAlign: "center", fontSize: "1rem"}}>–––––––––––––––––––––––––––––––––––––––––––––</p>
            <div className="about-me-text">
                <p > Hi! my name is Jessie Wang and I am 17 years old. I enjoy coding and volleyball. I currently live in Massachusetts. Volleyball is a passion and I've won multiple awards for it like being featured on the Boston Globe. </p>
                <p >Here are some fun facts about me:</p>
            </div>
            <ul className="funfacts">
                <p>––––––––––––––––––––––––––––––––––</p>
                <li> I am Canadian and haven been raised in Cananda for 9 years</li>
                <li> I've traveled around the world like Florida, Georgia, California, and my favorite Illinois</li>
                <li> I am working on this website so that I can go to a hackathon in Boston with my boyyfriendddd!</li>
                <li> I really like cats:</li>
            </ul>
            <img className="cat-pic" src="/cat.jpg" alt="cat" />
        </div>
    );

}

export default Home;