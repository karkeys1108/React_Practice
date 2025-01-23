// SignUp.js
import React from "react";
import AuthCard from "./Auth/AuthCard";
import "./SignUp.css";

const SignUp = ({ onToggle }) => {
  return (
    <AuthCard title="Sign Up">
      <form className="sign-up-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="sign-up-button">
          Sign Up
        </button>
      </form>
      <p className="sign-up-footer">
        Already have an account? 
        <button onClick={onToggle} className="toggle-button">
          Sign In
        </button>
      </p>
    </AuthCard>
  );
};

export default SignUp;
