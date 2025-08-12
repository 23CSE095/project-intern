// src/Components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand">🧘‍♀️ Mindfulness Tracker</span>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-2">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/register" className="nav-link">Register</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
