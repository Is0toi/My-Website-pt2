import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import './NavBar.css';
import { Link } from "react-router-dom";
import Toggle from "./Toggle";

function NavBar({ isDark, setIsDark }) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return <>
        <header>
            <div className="container">
                <nav>
                    <div className="nav-left">
                        <h2 className="Title">Jessie's Website</h2>

                        <Toggle
                            handleChange={() => setIsDark(!isDark)}
                            isChecked={isDark}
                        />
                    </div>

                    <ul className={isOpen ? "nav-link active" : "nav-link"}>
                        <li><Link to="/"> Home</Link></li>
                        <li><Link to="/projects"> Projects</Link></li>
                        <li><Link to="/contacts"> Contacts</Link></li>
                    </ul>
                    <div className="hamburger" onClick={toggleMenu}>
                        <FaBars />
                        {/* this is our hamburger menu */}
                    </div>
                </nav>
            </div>
        </header>
    </>
}
export default NavBar;
