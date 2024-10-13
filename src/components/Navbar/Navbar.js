// src/components/Navbar/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div className="navbar-center">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>

      <div className="navbar-right">
        <button className="navbar-btn">🔔</button>
        <button className="navbar-btn">👤</button>
      </div>
    </nav>
  );
};

export default Navbar;
