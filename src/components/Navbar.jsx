import React, { useContext } from "react";
import { UserContext } from "../App.js";
import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  const { login, setLogin, setAdmin, currentUser } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg" style={{ background: "wheat" }}>
      <div className="container-fluid">
        <NavLink
          className="navbar-brand "
          style={{ textDecoration: "none", color: "black" }}
          to="/info"
        >
          {login ? (
            <h3 title="User Details">
              {currentUser.firstName + " " + currentUser.lastName}
            </h3>
          ) : (
            <img className="image" src={"img/s.png"} alt="logo" />
          )}
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
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item p-2">
              <NavLink className="navItem" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink className="navItem" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item p-2">
              <NavLink className="navItem" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            {login ? (
              <li
                className="nav-item text-center p-1 m-2"
                style={{ borderRadius: "10px", background: "orangered" }}
              >
                <NavLink
                  className="nav-link"
                  to="/"
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
                  className="nav-link"
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
