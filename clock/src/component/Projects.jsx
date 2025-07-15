import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import './card.css'

function Projects() {
    return (
        <div>
            <div className= "card">
                <img className = "volleyball-icon" src = './volleyball-icon.jpg' alt="volleyball icon" style={{ width: '350px', height: '250px' }}></img>
                <h2>Volleyball</h2>
                <p>My biggest passion since I was 12</p>
               
            </div>
            <div className = "card">
                <img className = "robotics-icon" src = './robotics.jpg' alt="robotics icon" style={{ width: '350px', height: '233px' }}></img>
                <h2>Robotics</h2>
                <p> I love robotics, although busy from volleyball</p>
                <p>it's a passion I want to pursue in the future</p>
            </div>

            <div className = "card">
                <img className = "violinist-icon" src = './young-violinist.jpg' alt="violinist icon" style={{ width: '210px', height: '230px' }}></img>
                <h2>Violin</h2>
                <p> I've been playing violin since I was 7 and although I don't have time to do competitions I want to do some</p>
            </div>

            <div className = "card">
                <img className = "dance-icon" src = './dance.jpg' alt="dance icon" style={{ width: '250px', height: '210px' }}></img>
                <h2>Dance</h2>
                <p> I grew up doing dance, I've gotten out of my prime but I used to be able to have put my leg all the way to my head</p>
            </div>

            <div className = "card">
                <img className = "cubesat-icon" src = './cubesat.jpg' alt="cubesat icon" style={{ width: '300px', height: '230px' }}></img>
                <h2>CubeSat</h2>
                <p> This year I made we made a cubesat called the CatSat and it was a lot of fun</p>
            </div>

            <div className = "card">
                <img className = "hackathon-icon" src = './hackathon-sel.jpg' alt="hackathon icon" style={{ width: '200px', height: '230px' }}></img>
                <h2>Hackathon</h2>
                <p> My first and last Hackathon, I wish I did more + my boyfriend</p>
            </div>

            <div className = "card">
                <img className = "ice-skating-icon" src = './ice-skating.jpg' alt="ice skating icon" style={{ width: '220px', height: '230px' }}></img>
                <h2>Ice Skating</h2>
                <p> I'm canadian, I have to know how to be a pro at skating. I used to do it competitively</p>
            </div>
        </div>
    );
}

export default Projects;