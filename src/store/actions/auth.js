import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";

export const AUTHENTICATE = "AUTHENTICATE",
  SIGN_OUT = "SIGN_OUT", START_LOGIN = "START_LOGIN", LOGIN_FAILURE = "LOGIN_FAILURE"

export const authenticate = (username, password) => dispatch => {
  dispatch({ type: START_LOGIN });
  axios
  .post("https://haircare-api-3.herokuapp.com/api/auth/login", { 
    username, password
  })
  .then(res => {
    console.log("authenticate respsonse", res)
    localStorage.setItem("token");
  dispatch({ type: AUTHENTICATE });
  })
  .catch(err => {
    dispatch({ type: LOGIN_FAILURE, payload: err})
  })
  
};

export const signOut = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({ type: SIGN_OUT });
};