import React, { useContext } from "react";
import { UserContext } from "../App.js";
import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  const { login, setLogin, setAdmin, currentUser } = useContext(UserContext);

  return (
    <nav
      className="navbar navbar-expand-lg mb-3"
      style={{ background: "wheat" }}
    >
      <div className="container-fluid">
        <NavLink
          className="navbar-brand "
          style={{ textDecoration: "none", color: "black" }}
          to="/info"
        >
          {login ? currentUser.firstName + " " + currentUser.lastName : "Home"}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0 "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item pe-4">
              <NavLink
                className="nav-link"
                to="/"
                style={{ textDecoration: "none", color: "black" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item pe-4">
              <a
                className="nav-link"
                style={{ textDecoration: "none", color: "black" }}
                href="www.linkedin.com/in/shyamharode"
                target="_blank"
                rel="noreferrer"
              >
                About
              </a>
            </li>

            <li className="nav-item pe-4">
              <NavLink
                className="nav-link"
                to="/dashboard"
                style={{ textDecoration: "none", color: "black" }}
              >
                Dashboard
              </NavLink>
            </li>
            {login ? (
              <li
                className="nav-item text-center p-1"
                style={{ borderRadius: "10px", background: "orangered" }}
              >
                <NavLink
                  className="nav-link m"
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  onClick={() => {
                    setAdmin(false);
                    setLogin(false);
                  }}
                >
                  Log Out
                </NavLink>
              </li>
            ) : (
              <li
                className="nav-item text-center p-1"
                style={{ borderRadius: "10px", background: "blue" }}
              >
                <NavLink
                  className="nav-link m"
                  to="/create-user"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Sign Up
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
