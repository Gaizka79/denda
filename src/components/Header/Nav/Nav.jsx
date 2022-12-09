import React from "react";
import { Link } from "react-router-dom";

function Nav () {
  return (
    <nav>
      <Link className="menu__item" to="/">Home</Link>
      <Link className="menu__item" to="/Productos">Productos</Link>
      <Link className="menu__item" to="/About">About</Link>
    </nav>
  )
}

export default Nav;
