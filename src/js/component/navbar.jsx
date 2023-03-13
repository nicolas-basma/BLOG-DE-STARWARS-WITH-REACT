import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
	<div className="container-fluid">
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/home">
        <span className="navbar-brand mb-0 h1">star wars</span>
      </Link>
      <div className="" id="navbarNavDarkDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <button
              className="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#"></a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
	</div>
  );
};
