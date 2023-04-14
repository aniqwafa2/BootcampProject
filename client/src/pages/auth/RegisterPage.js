import React, { useState } from "react";
import image from "../../assets/bg-register.jpg";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    re_type_password: "",
    role: "",
  });

  const submitHandler = () => {};
  return (
    <div className="">
      <div className="bg-light">
        <img className="bg-auth" src={image} alt="" />
      </div>
      <div className="form-auth bg-dark p-4">
        <Link classNameName="no-text-decoration" to="/">
          <h2 className="text-center no-text-decoration">Joki Game</h2>
        </Link>
        <h4>Register</h4>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Re-type Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) =>
                setForm({ ...form, re_type_password: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Role
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />
          </div>
          <button
            onClick={submitHandler}
            type="submit"
            className="btn btn-secondary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
