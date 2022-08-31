import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Biodata</h1>
      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/data">Data</Link>
      </div>
    </nav>
  );
};

export default Navbar;
