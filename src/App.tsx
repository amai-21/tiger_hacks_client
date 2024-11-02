import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import NavBar from "./components/NavBar";
import RecommendPage from "./pages/RecommendPage";
import Header from "./components/GuideHeader";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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
          <Route path="/rec" element={<RecommendPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
