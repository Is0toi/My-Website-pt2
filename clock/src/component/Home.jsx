import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import cat from './cat.jpg';


function Home() {
    return (
        <div>
            <h1 className="home-title"> Jessie Wang // isotoi</h1>
            <div className = "about-me-text">
                <p > Hi! my name is Jessie Wang and I am 17 years old. I enjoy coding and volleyball. I currently live in Massachusetts. Volleyball is a passion and I've won multiple awards for it like being featured on the Boston Globe. </p>
                <p >Here are some fun facts about me:</p>
            </div>
            <ul className= "funfacts">
                <p>––––––––––––––––––––––––––––––––––</p>
                <li> I am Canadian and haven been raised in Cananda for 9 years</li>
                <li> I've traveled around the world like Florida, Georiga, California, and my favorite Chicago</li>
                <li> I am working on this website so that I can go to a hackathon in Boston with my boyyfriendddd!</li>
                <li> I really like cats:</li>
            </ul>
            <img className = "cat-pic" src={cat} alt="cat" />
        </div>
    );

}

export default Home;