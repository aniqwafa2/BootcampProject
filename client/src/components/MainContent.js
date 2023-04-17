import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AddJoki,
  DetailJoki,
  DetailOrder,
  DetailUser,
  EditJoki,
  HomePage,
  Joki,
  ListJoki,
  ListOrder,
  LoginPage,
  Order,
  RegisterPage,
  User,
} from "../pages";

const MainContent = (props) => {
  const { loginStatus, loginCbHandler } = props;
  return (
    <div className="bg-dark">
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route
          path="login"
          element={<LoginPage loginCbHandler={loginCbHandler} />}
        ></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="joki" element={<Joki />}>
          <Route path="" element={<ListJoki />}></Route>
          <Route path="add" element={<AddJoki />}></Route>
          <Route path="edit/:id" element={<EditJoki />}></Route>
          <Route
            path=":id"
            element={<DetailJoki loginStatus={loginStatus} />}
          ></Route>
        </Route>
        <Route path="order" element={<Order></Order>}>
          <Route path="" element={<ListOrder loginStatus={loginStatus} />}></Route>
          <Route path=":id" element={<DetailOrder />}></Route>
        </Route>
        <Route path="user" element={<User />}>
          <Route
            path=""
            element={<DetailUser loginStatus={loginStatus} />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainContent;
