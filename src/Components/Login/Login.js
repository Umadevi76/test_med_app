import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, [navigate]);

  const login = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await res.json();

    if (json.authtoken) {
      sessionStorage.setItem('auth-token', json.authtoken);
      sessionStorage.setItem('email', email);
      navigate('/');
      window.location.reload();
    } else {
      if (json.errors) {
        json.errors.forEach(error => alert(error.msg));
      } else {
        alert(json.error);
      }
    }
  };

  return (
    <div className="container">
      <div className="login-grid">
        <h2>Login</h2>

        <p className="signup-link">
          Are you a new member?{" "}
          <Link to="/Sign_Up/Sign_Up.html" style={{ color: '#2190FF' }}>
            Sign Up Here
          </Link>
        </p>

        <form onSubmit={login}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light" >
              Login
            </button>
            </div>
            <div className="btn-group reset-group">
            <button type="reset" className="btn btn-danger" >
              Reset
            </button>
          </div>

          <p className="forgot-password">Forgot Password?</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
