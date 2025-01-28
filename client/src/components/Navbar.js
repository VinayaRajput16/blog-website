import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './images/logo.png';

const Navbar = () => {
  // State to manage the search input and button toggle
  // const [isExpanded, setIsExpanded] = useState(false);

  // Toggle function to show/hide the search input
  // const expand = () => {
  //   setIsExpanded(prevState => !prevState);
  // };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li className="dropdown">
          <span className="main-link">Services</span>
          <ul className="dropdown-menu">
            <li><Link to="/services/web-design">Website Design</Link></li>
            <li><Link to="/services/web-development">Website Development</Link></li>
            <li><Link to="/services/Hosting">Web Hosting</Link></li>
          </ul>
        </li>
        <li><Link className="main-link" to="/">Home</Link></li>
        <li className="dropdown">
          <span className="main-link">Blogs</span>
          <ul className="dropdown-menu">
            <li><Link to="/blogs">All posts</Link></li>
            <li><Link to="/blogs/technology">New Technology</Link></li>
            <li><Link to="/blogs/web development">Web Development</Link></li>
            <li><Link to="/blogs/poems">Poems</Link></li>
            <li><Link to="/blogs/fun">Fun</Link></li>
          </ul>
        </li>
        <li><Link className="main-link" to="/about">About Me</Link></li>
      </ul>
      {/* Search Form */}
      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="What are you looking for?" />
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
