// Auth.js
import React, { useState } from 'react';
import { loginUser } from '../axios'; 
import { useNavigate } from 'react-router-dom';

const Auth = ({ onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  console.log(credentials); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(credentials); // Call login API
      localStorage.setItem('authToken', data.token); // Save token to localStorage
      setError(null);
      onLoginSuccess(); // Notify parent of successful login
      navigate('/post/create'); // Redirect to the create post page or wherever needed
    } catch (err) {
      console.error(err); // Debug: Log the error
      setError('Invalid credentials, please try again.'); // Display error message
    }
  };
  
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Auth;
