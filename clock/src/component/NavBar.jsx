import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {

    const[isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return <>
  <header>
    <div className = "container">
    <nav>
        <div className = "Title">
            <h2>Jessie's Website</h2>
        </div>
        <ul className={isOpen ? "nav-link active" : "nav-link"}>
            <li><Link to = "/home"> Home</Link></li>
            <li><Link to  = "/projects"> Projects</Link></li>
            <li><Link to  = "/contacts"> Contacts</Link></li>
        </ul>
        <div className="icon" onClick = {toggleMenu}>
            <FaBars />
            {/* this is our hamburger menu */}
        </div>
    </nav>
  </div>
  </header>
  {/* <section>
    <div className="container">
        <div className="content">
            <h2> Who is this?</h2>
            <p> Hi!  My name is Jessie and I am 17 years old. I was born in Canada (proud to be a Canadian), but now I currently live in Massachusettes, Andover. A few fun facts about me!!  </p>
            <li>
                <p> I've played volleyball since I was 12 and I've played at a national level, traveling around the nation like Florida, Gerogia, and one of my favourites, CHICAGOOOOO </p>
            </li>
        </div>

    </div>
  </section> */}
  </>
}

export default NavBar
