import React, { useEffect, useState } from "react";
// import {  } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavbarMenu = (props) => {
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, [loginStatus]);

  console.log("Login APP Status" + loginStatus);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };

  const navigation = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    loginCbHandler(false);
    navigation("")
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
              {loginStatus ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/order">
                      Order
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/joki">
                      My Joki
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user">
                      User
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={() => logoutHandler()}
                      className="nav-link"
                      // to="/user"
                    >
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
