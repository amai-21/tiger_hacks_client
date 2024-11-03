import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "../.cssFiles/login.css";
const LoginForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="Loginbody">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FontAwesomeIcon icon={faUser} style={{ color: "#fff" }} />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FontAwesomeIcon icon={faLock} style={{ color: "#fff" }} />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn">
            Log In
          </button>

          <div className="register-link">
            <p>
              Don't have an account? <Link to="register.html">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
