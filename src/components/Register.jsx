import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Cstyle/Register/Register.css";

function Register() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignInClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="app">
      <div className="spot">
        <h2 className="wmsg">Welcome back</h2>
        <div className="ingp">
          <label className="inlb">
            <input placeholder="Username" className="infd" />
          </label>
        </div>
        <div className="ingp">
          <label className="inlb">
            <input placeholder="Email" className="infd" />
          </label>
        </div>
        <div className="ingp">
          <label className="inlb">
            <input placeholder="Mobile Number" className="infd" />
          </label>
        </div>
        <div className="ingp">
          <label className="inlb">
            <input placeholder="Password" className="infd" />
          </label>
        </div>
        <div className="ingp">
          <label className="inlb">
            <input placeholder="Confirm Password" className="infd" />
          </label>
        </div>
        <div className="bg">
          <div className="buttons">
            <button className="register">Register</button>
            <button className="signin" onClick={handleSignInClick}>
              Already have an account? Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
