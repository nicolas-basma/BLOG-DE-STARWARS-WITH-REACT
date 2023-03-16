import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/home">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFQDCjUKaJeQFoZOv2WdbvdsZO5o1S4gfMbn_8OSEXNb7c3GccxsKmTX5yC9FvOHeJ5M&usqp=CAU"
          />
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
