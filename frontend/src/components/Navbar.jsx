import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Import search icon
import "../styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo"> Blogs world </h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/create-post">Create Post</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
