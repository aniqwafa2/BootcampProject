import React, { useState } from "react";
import image from "../../assets/bg-register.jpg";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../axios/user";

const RegisterPage = () => {
  const [form, setForm] = useState({
    nama: "",
    username: "",
    password: "",
    role: "",
    contact: "",
    image: null,
    description: "",
  });

  const navigation = useNavigate();

  const submitHandler = () => {
    registerUser(form);
    navigation('/')
  };

  return (
    <div className="">
      <div className="bg-light">
        <img className="bg-auth" src={image} alt="" />
      </div>
      <div className="form-auth bg-dark p-4">
        <Link className="" to="/">
          <h2 className="text-center text-white">Joki Game</h2>
        </Link>
        <h4>Register</h4>
        <form>
          <div className="mb-3">
            <label className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Contact
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Role
            </label>
            <input
              type="text"
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
