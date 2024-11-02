import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
//import StateDropDown from "./components/StateDropDown";

import NavBar from "./components/NavBar";
import ReccommendPage from "./pages/RecommendPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/join">Join</Link>
            </li>
            <li>
              <Link to="/rec">Recs</Link>
            </li>
            <li>
              <Link to="/guide">Guide</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/join" element={<LocationPage />} />
          <Route path="/rec" element={<ReccommendPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
