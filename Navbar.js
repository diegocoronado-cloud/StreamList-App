import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHome, FaFilm, FaShoppingCart, FaInfoCircle, FaBoxOpen } from "react-icons/fa";

const Navbar = ({ cart }) => {
  const itemCount = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <nav className="navbar">
      <h1 className="logo">StreamList</h1>
      <ul className="nav-links">
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/movies"><FaFilm /> Movies</Link></li>
        <li><Link to="/subscriptions"><FaBoxOpen /> Subscriptions</Link></li>
        <li><Link to="/cart"><FaShoppingCart /> Cart ({itemCount})</Link></li>
        <li><Link to="/about"><FaInfoCircle /> About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
