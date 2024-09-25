import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">
      <h1>Puppy Bowl</h1>
      <nav>
        <Link to="/" className="main-nav-link">
          Home
        </Link>
        <Link to="/create" className="main-nav-link">
          Add New Player
        </Link>
      </nav>
    </header>
  );
}

export default Header;