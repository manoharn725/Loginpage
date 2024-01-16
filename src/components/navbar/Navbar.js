import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/faq">Faq</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
