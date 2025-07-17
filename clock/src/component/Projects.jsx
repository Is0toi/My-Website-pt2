import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import './card.css'

function Projects() {
    return (
        <div>
            <a className="link-font" href="https://www.youtube.com/watch?v=fB3SSmhBG-I" target="_blank" rel="noopener noreferrer">
            <div className="card">
                <img className="volleyball-icon" src='./volleyball-icon.jpg' alt="volleyball icon" style={{ width: '350px', height: '250px' }}></img>
                <h2>Volleyball</h2>
                <p>My biggest passion since I was 12</p>
            </div>
            </a>

            <a className="link-font" href="https://www.instagram.com/p/CnTSvfrtlLR/?img_index=1" target="_blank" rel="noopener noreferrer">
            <div className="card">
                <img className="robotics-icon" src='./robotics.jpg' alt="robotics icon" style={{ width: '350px', height: '233px' }}></img>
                <h2>Robotics</h2>
                <p> I love robotics, although busy from volleyball</p>
                <p>it's a passion I want to pursue in the future</p>
            </div>
            </a>

            <a className="link-font" href="https://drive.google.com/file/d/1TpzDSIvcN9u-U2fgC50PfR5wuoHHlONP/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <div className="card">
                <img className="violinist-icon" src='./young-violinist.jpg' alt="violinist icon" style={{ width: '210px', height: '230px' }}></img>
                <h2>Violin</h2>
                <p> I've been playing violin since I was 7 and although I don't have time to do competitions I want to do some</p>
            </div>
            </a>

            <a className="link-font" href="https://drive.google.com/file/d/1KMvqLMN-xhnzvPwtDf-fmGOECCKB6Pxc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <div className="card">
                <img className="dance-icon" src='./dance.jpg' alt="dance icon" style={{ width: '250px', height: '210px' }}></img>
                <h2>Dance</h2>
                <p> I grew up doing dance, I've gotten out of my prime but I used to be able to have put my leg all the way to my head</p>
            </div>
            </a>

            <a className="link-font" href="https://drive.google.com/drive/folders/1Oa1vfpYRJ8C8R1q91U7ICeeJE4_YPFjU?usp=sharing" target="_blank" rel="noopener noreferrer">
                <div className="card">
                    <img className="cubesat-icon" src='./cubesat.jpg' alt="cubesat icon" style={{ width: '300px', height: '230px' }}></img>
                    <h2>CubeSat</h2>
                    <p> This year I made we made a cubesat called the CatSat and it was a lot of fun</p>
                </div>
            </a>

            <a className="link-font" href="https://drive.google.com/drive/folders/1tFv0ozuajxDMBeF6rSO-UPWsOE-p3BmM?usp=sharing" target="_blank" rel="noopener noreferrer">
                <div className="card">
                    <img className="hackathon-icon" src='./hackathon-sel.jpg' alt="hackathon icon" style={{ width: '200px', height: '230px' }}></img>
                    <h2>Hackathon</h2>
                    <p> My first and last Hackathon, I wish I did more + my boyfriend</p>
                </div>
            </a>

            <a className="link-font" href="https://drive.google.com/file/d/10TYzNUEFXEFXJRHB-EPoW-1cF7d_2Ocu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <div className="card">
                    <img className="ice-skating-icon" src='./ice-skating.jpg' alt="ice skating icon" style={{ width: '220px', height: '230px' }}></img>
                    <h2>Ice Skating</h2>
                    <p> I'm canadian, I have to know how to be a pro at skating</p>
                </div>
            </a>
        </div>
    );
}

export default Projects;