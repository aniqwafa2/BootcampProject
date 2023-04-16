import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
// import {  } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavbarMenu = (props) => {
  const { loginStatus, loginCbHandler } = props;

  const navigation = useNavigate();

  const changeLocation = (placeToGo) => {
    navigation(placeToGo, { replace: true });
    window.location.reload();
  };

  const logoutHandler = async () => {
    localStorage.clear();
    await loginCbHandler(false, "");
    Swal.fire("Logout", "logout successful", "success");
    navigation("/");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand mx-3" to="/">
            <h3>Joki Game</h3>
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {loginStatus.status ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/order"
                      onClick={() => changeLocation("/order")}
                    >
                      Order
                    </Link>
                  </li>
                  {loginStatus.role === "joki" ? (
                    <>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/joki"
                          onClick={() => changeLocation("/joki")}
                        >
                          My Joki
                        </Link>
                      </li>
                    </>
                  ) : null}
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/user"
                      onClick={() => changeLocation("/user")}
                    >
                      User
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link onClick={() => logoutHandler()} className="nav-link">
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMenu;
