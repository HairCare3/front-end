import React from "react";
import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";

// add user
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE"


export const registerUser = newUser => dispatch => {
    dispatch({ type: REGISTER_START })
    axiosWithAuth()
    .post("/auth/register", {
        username: newUser.username,
        password: newUser.password
    })
    .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload )
        dispatch({ type: REGISTER_SUCCESS })
        return true
    })
    .catch(err =>{
        console.log(err);
        dispatch({ type: REGISTER_FAILURE, payload: err })
    })
}
