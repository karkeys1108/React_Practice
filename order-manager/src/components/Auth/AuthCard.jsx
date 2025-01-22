// AuthCard.js
import React from "react";
import "./AuthCard.css";

const AuthCard = ({ children, title }) => {
  return (
    <div className="auth-card">
      <h2 className="auth-card-title">{title}</h2>
      {children}
    </div>
  );
};

export default AuthCard;
