import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Cstyle/Login/Login.css";

function Login() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignUpClick = () => {
    navigate("/register"); // Navigate to the Register page
  };

  return (
    <div className="app">
      <div className="spot">
        <h2 className="wmsg">Welcome back</h2>
        <div className="ingp">
          <label className="inlb">
            <input placeholder="username" className="infd" />
          </label>
        </div>
        <div className="ingp">
          <label className="inlb">
            <input placeholder="Password" className="infd" />
          </label>
        </div>
        <p className="fp">
          <a href="http://localhost:3000/">Forgot password?</a>
        </p>
        <div className="button-group">
          <div className="buttons">
            <button className="login">Log in</button>
            <button className="signup" onClick={handleSignUpClick}>
              New user? Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
