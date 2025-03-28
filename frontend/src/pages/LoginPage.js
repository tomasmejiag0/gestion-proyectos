import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import '../index.css';
import googleLogo from '../assets/google-logo.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginClick = (type) => {
    setUserType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const user = login(email, userType);
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'manager') {
        navigate('/manager');
      } else if (user.role === 'chief') {
        navigate('/chief');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-options">
        <button className="login-btn" onClick={() => handleLoginClick('admin')}>Admin</button>
        <button className="login-btn" onClick={() => handleLoginClick('worker')}>Worker</button>
        <button className="login-btn" onClick={() => handleLoginClick('owner')}>Owner</button>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
        <div className="social-login">
          <p>Or sign in with:</p>
          <button className="social-btn">
            <img src={googleLogo} alt="Google" />
            Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;