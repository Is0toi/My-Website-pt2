import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import './NavBar.css'

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
            <li><a href = "/home"> Home</a></li>
            <li><a href = "/about"> About</a></li>
            <li><a href = "/contacts"> Contacts</a></li>
        </ul>
        <div className="icon" onClick = {toggleMenu}>
            <FaBars />
            {/* this is our hamburger menu */}
        </div>
    </nav>
  </div>
  </header>
  <section>
    <div className="container">
        <div className="content">
            <h2> hiiiii</h2>
        </div>

    </div>
  </section>
  </>
}

export default NavBar
