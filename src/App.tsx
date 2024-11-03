import React from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import NavBar from "./components/NavBar";
import RecommendPage from "./pages/RecommendPage";
import Header from "./components/SpecializedCropsPage";
import LoginForm from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/join" element={<LocationPage />} />
          <Route path="/rec" element={<RecommendPage />} />
          <Route path = "/login" element = {<LoginForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
