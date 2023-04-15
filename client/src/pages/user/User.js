import React from "react";
import { Outlet } from "react-router-dom";
import './styles.css'

const User = () => {
  return (
    <>
      <div className="container padding-top text-white">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default User;
