import './App.css';
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project from './Project.js';
import About from './About.js';
import Home from './Home.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App
