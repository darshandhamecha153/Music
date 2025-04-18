import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" /> 
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/playlist">Playlist</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
