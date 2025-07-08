import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <nav className="navBar">
            <h1>Jessie's Website</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/project">Projects</Link>
            </div>
        </nav>
    );
}

export default NavBar;