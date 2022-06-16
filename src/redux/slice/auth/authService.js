import axios from "axios";
import Cookies from "js-cookie";
const API_URL = "https://faker-sns-api.herokuapp.com/api/user/";
// process.env.REACT_APP_API_URL_USER ||
// process.env.REACT_APP_API_URL_USER_PRODUCTION;

// register user
const register = async (userData) => {
  const { data } = await axios.post(API_URL + "register", userData);
  if (data) {
    Cookies.set("user", JSON.stringify(data));
  }

  return data;
};

// login user
const login = async (userData) => {
  const { data } = await axios.post(API_URL + "login", userData);
  if (data) {
    Cookies.set("user", JSON.stringify(data));
  }

  return data;
};

// logout user

const logout = () => {
  Cookies.remove("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
