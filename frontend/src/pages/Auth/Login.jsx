import React from "react";
import "../../styles/Auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <form className="auth-form">
        <div className="auth-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="auth-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="auth-button">Login</button>
        <p className="auth-link">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
