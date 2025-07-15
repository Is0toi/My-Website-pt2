import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import './index.css';
import Home from "./component/Home";
import Projects from "./component/Projects";
import Contacts from "./component/Contacts";



function App() {
    const [isDark, setIsDark] = useState(false);
    return (
        <Router>
        <div className={isDark ? "dark" : "light"}>
            <NavBar isDark={isDark} setIsDark={setIsDark} />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </div>
        </Router>
    );
}

export default App;
