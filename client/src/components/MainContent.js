import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AddJoki,
  DetailJoki,
  DetailOrder,
  DetailUser,
  HomePage,
  Joki,
  ListJoki,
  ListOrder,
  LoginPage,
  Order,
  RegisterPage,
  User,
} from "../pages";

const MainContent = () => {
  return (
    <div className="bg-dark">
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="joki" element={<Joki />}>
          <Route path="" element={<ListJoki />}></Route>
          <Route path="add" element={<AddJoki />}></Route>
          <Route path="" element={<DetailJoki />}></Route>
        </Route>
        <Route path="order" element={<Order></Order>}>
          <Route path="" element={<ListOrder />}></Route>
          <Route path=":id" element={<DetailOrder />}></Route>
        </Route>
        <Route path="user" element={<User />}>
          <Route path="" element={<DetailUser />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainContent;
