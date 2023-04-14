import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/user";

const loginUser = async (user, cb) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + '/login',
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

export { loginUser, registerUser };
