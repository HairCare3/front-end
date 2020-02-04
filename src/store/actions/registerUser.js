import React from "react";
import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";

// add user
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE"


export const registerUser = initialState => dispatch => {
    dispatch({ type: REGISTER_START })
    axios
    .post("https://haircare-api-3.herokuapp.com/auth/register", { 
        // username: initialState.username,
        // email: initialState.email,
        // password: initialState.password,
        // location: initialState.location
    })
    .then(res => {
        console.log(res);
        localStorage.setItem("token", res /*input correct res here*/ )
        dispatch({ type: REGISTER_SUCCESS })
    })
    .catch(err =>{
        console.log(err);
        dispatch({ type: REGISTER_FAILURE, payload: err })
    })
}
