import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img
            className="logo"
            src="https://d3g9pb5nvr3u7.cloudfront.net/sites/5bc3f1ccdce90669ff8b2ef8/-1739758305/256.png"
          />
        </a>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-dark dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
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
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
  );
};
