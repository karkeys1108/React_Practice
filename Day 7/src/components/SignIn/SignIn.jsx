import React from "react";
import AuthCard from "./Auth/AuthCard";
import './SignIn.css'; // Import the CSS file

const SignIn = ({ onToggle }) => {
  return (
    <AuthCard title="Sign In">
      <form className="container">
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="button"
        >
          Sign In
        </button>
      </form>
      <p className="text-sm text-center mt-4">
        Don't have an account?{" "}
        <button
          onClick={onToggle}
          className="text-blue-500 hover:underline"
        >
          Sign Up
        </button>
      </p>
    </AuthCard>
  );
};

export default SignIn;
