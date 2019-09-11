import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const navLinks = [
    { to: "/movies", text: "Movies" },
    { to: "/customers", text: "Customers" },
    { to: "/rentals", text: "Rentals" }
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          {navLinks.map(navLink => (
            <NavLink
              className="nav-item nav-link"
              key={navLink.to}
              to={navLink.to}
            >
              {navLink.text}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
