import React from "react";
import "../../styles/Auth.css";

const Register = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Register</h2>
      <form className="auth-form">
        <div className="auth-field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="auth-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="auth-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required />
        </div>
        <button type="submit" className="auth-button">Register</button>
        <p className="auth-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
