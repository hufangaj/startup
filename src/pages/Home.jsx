import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    console.log('Submitted:', { username, password });

    if (username === 'admin' && password === 'password') {
        navigate('/capsules');
      } else {
        alert('Invalid username or password');
      }

    setUsername('');
    setPassword('');
    setRememberMe(false);
  };

  return (
    <main>
      <h1>Welcome to the Mobile Time Capsule</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>

    </main>
  );
}


