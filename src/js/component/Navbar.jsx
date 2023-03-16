import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-light mb-3">
        <NavLink className="navbar-brand" href="#">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFQDCjUKaJeQFoZOv2WdbvdsZO5o1S4gfMbn_8OSEXNb7c3GccxsKmTX5yC9FvOHeJ5M&usqp=CAU"
          />
        </NavLink>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle p-2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Action
          </button>
          <ul className="dropdown-menu">
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
    </>
  );
};
