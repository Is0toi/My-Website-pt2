import React from 'react'
import './NavBar.css'

function NavBar() {
  return <header>
    <div className = "container">
    <nav>
        <div className = "Title">
            <h2>Jessie's Website</h2>
        </div>
        <ul className="nav-link">
            <li><a href = "/home"> Home</a></li>
            <li><a href = "/about"> About</a></li>
            <li><a href = "/contacts"> Contacts</a></li>
        </ul>
    </nav>
  </div>
  </header>
}

export default NavBar
