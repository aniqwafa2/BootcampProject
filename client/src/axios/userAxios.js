import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/user";

const loginUser = async (user, cb) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "/login",
      data: user,
    });

    // const access_token = login.data.access_token
    // localStorage.setItem('access_token', access_token)

    Swal.fire("Berhasil Login", "Login Success", "success");
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const registerUser = async (user) => {
  try {
    let register = await axios({
      method: "POST",
      url: URL + "/create",
      data: user,
    });
    Swal.fire("Berhasil Register", "Register Success", "success");
    // cb(register.data);
    console.log(register.data);
  } catch (error) {
    console.log(error);
  }
};

const detailUser = async (token, cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + "/profile",
      headers: {
        "access_token": token,
      },
    });

    console.log(result.data)
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const listOrder = async (cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + "/order",
    });
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const detailOrder = async (id, cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + "/order/" + id,
    });
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const deleteOrder = async (id) => {
  try {
    let result = await axios({
      method: "DELETE",
      url: URL + "/order/" + id,
    });
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (user) => {
  try {
    let result = await axios({
      method: "PUT",
      url: URL + "/edit",
      data: user,
    });
    console.log(result);
    Swal.fire("Berhasil Register", "Register Success", "success");
  } catch (error) {
    console.log(error);
  }
};

const addOrder = async (id, user) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "/createorder/" + id,
      data: user,
    });
    Swal.fire("Berhasil Register", "Register Success", "success");
  } catch (error) {
    console.log(error);
  }
};

export {
  loginUser,
  registerUser,
  detailUser,
  listOrder,
  detailOrder,
  deleteOrder,
  editUser,
  addOrder,
};
