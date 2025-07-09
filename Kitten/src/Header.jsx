import {Link} from 'react-router-dom';

function Header(){
    return(
        <header>
            <h1>Jessie's Website</h1>
            {/*<nav>
                <ul>
                    <li><Link to="/App">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/project">Projects</Link></li>
                </ul>
            </nav> */}
            <hr></hr>
        </header>
        
    );
}

export default Header;