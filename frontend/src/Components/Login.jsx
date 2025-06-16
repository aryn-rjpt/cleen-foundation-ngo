import React from 'react'
import { useNavigate } from 'react-router-dom';

import '../styles/Login.css'

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login successful (mock)');
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Welcome Back!</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p className="register-link">
        Not registered?{' '}
        <span onClick={() => navigate('/cleen-foundation-ngo/register')}>Register Now</span>
        </p>

      </form>
    </div>
  );
};

export default Login;