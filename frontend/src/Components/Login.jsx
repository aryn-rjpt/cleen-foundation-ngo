import React from 'react'
import { useNavigate } from 'react-router-dom';
import donationImage from "../assets/donation.png"

import '../styles/Login.css'

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login successful (mock)');
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${donationImage})` }}>
    <div className="login-overlay" />

    <div className="login-box">
      <h2>Login to Your Account</h2>
      <form className="login-form">
        <label>Email</label>
        <input type="email" placeholder="you@example.com" required />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  </div>
  );
};

export default Login;