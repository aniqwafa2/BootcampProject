import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/user";
const token = localStorage.getItem("access_token");

const loginJoki = async (user) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "/login",
      data: user,
    });

    const access_token = result.data
    localStorage.setItem('access_token', access_token)
    localStorage.setItem('role', 'user')

    Swal.fire("Berhasil Login", "Login Success", "success");
    // cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const registerJoki = async (user) => {
  try {
    let register = await axios({
      method: "POST",
      url: URL + "/create",
      data: user,
      headers: { "Content-Type": "multipart/form-data" },
    });
    Swal.fire("Berhasil Register", "Register Success", "success");
    // cb(register.data);
    console.log(register.data);
  } catch (error) {
    console.log(error);
  }
};

const detailJoki = async (cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + "/profile",
      headers: {
        "access_token": token,
      },
    });

    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const editJoki = async (user) => {
  try {
    let result = await axios({
      method: "PUT",
      url: URL + "/edit",
      data: user,
      headers: {
        "access_token": token,
      },
    });
    Swal.fire("Berhasil Register", "Register Success", "success");
  } catch (error) {
    console.log(error);
  }
};

const listPaket = async (cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + "/order",
      headers: {
        "access_token": token,
      },
    });

    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const detailPaket = async (id, cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + "/detailpaket/" + id,
      headers: {
        "access_token": token,
      },
    });

    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const paketOrdered = async (id, cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + "/paketordered/" + id,
      headers: {
        "access_token": token,
      },
    });

    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

const createPaket = async (paket) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + "/createpaket",
      headers: {
        "access_token": token,
      },
    });
    Swal.fire("Berhasil Register", "Register Success", "success");
  } catch (error) {
    console.log(error);
  }
};

export {
  loginJoki,
  registerJoki,
  detailJoki,
  editJoki,
  listPaket,
  detailPaket,
  paketOrdered,
  createPaket,
};
