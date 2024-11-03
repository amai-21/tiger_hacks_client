import React from "react";
import { Link } from "react-router-dom";
import "../.cssFiles/home.css";

const HomePage: React.FC = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>GoGarden</h1>
        <h3>Grow Your Green Thumb</h3>
        <p>
          Dig Into Gardening Without the Dirty Work! Discover ideal crops for
          your region with just a click. Get started on your garden venture with
          our step-by-step support. Experience personal benefits and uplift your
          community effortlessly. Leave the research to us—GoGarden!
        </p>

        <div className="btn-box">
          <Link to="/join">Get Started</Link>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
