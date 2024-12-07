import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1 className="title">Mobile Time Capsule</h1>
      <nav>
        <ul className="navbar">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/capsules">Capsules</NavLink></li>
          <li><NavLink to="/create-capsule">Create Capsule</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
