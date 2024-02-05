import React from "react";
// import { NavLink, Link } from "react-router-dom";
import { Outlet, Link, NavLink } from "react-router-dom";
import "../App.css";
function NavBar() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="#">Healthh</Link>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore" activeClassName="active">
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" activeClassName="active">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" activeClassName="active">
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}

export default NavBar;
