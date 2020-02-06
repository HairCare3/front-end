import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";

// FETCHING STYLISTS
export const FETCHING_STYLISTS_START = "FETCHING_STYLISTS_START", FETCHING_STYLISTS_SUCCESS = "FETCHING_STYLISTS_SUCCESS", FETCHING_STYLISTS_FAILURE = "FETCHING_STYLISTS_FAILURE";

// FETCHING SINGLE STYLISTS
export const SINGLE_STYLISTS_START = "SINGLE_STYLISTS_START", SINGLE_STYLISTS_SUCCESS = "SINGLE_STYLISTS_SUCCESS", SINGLE_STYLISTS_FAILURE = "SINGLE_STYLISTS_FAILURE";

// POSTING STYLISTS REVIES
export const ADD_REVIEW_START = "ADD_REVIEW_START", ADD_REVIEW_SUCCESS = "ADD_REVIEW_SUCCESS", ADD_REVIEW_FAILURE = "ADD_REVIEW_FAILURE";


export const fetchStylists = () => dispatch => {
    // const headers = {
    //     Authorization: localStorage.getItem("token")
    // }
    console.log("TOKEN:", localStorage.getItem("token"))
    dispatch({ type: FETCHING_STYLISTS_START })
    axiosWithAuth()
    .get("/stylists")
    .then(res => {
        console.log("stylists response", res)
        dispatch({ type: FETCHING_STYLISTS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log("fetching stylist error", err) // most likely the payload will be err.response
        dispatch({ type: FETCHING_STYLISTS_FAILURE, payload: err})
    })
};

export const fetchStylistsId = (id) => dispatch => {
    dispatch({ type: SINGLE_STYLISTS_START })
    axiosWithAuth()
    .get(`/stylists/${id}`, id)
    .then(res => {
        console.log("stylist by id response", res)
        dispatch({ type: SINGLE_STYLISTS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log("get stylist by id", err)
        dispatch({ type: SINGLE_STYLISTS_FAILURE, payload: err })
    })
};

export const addStylistReviews = (id) => dispatch => {
    dispatch({ type: ADD_REVIEW_START })
    axiosWithAuth()
    .post(`/stylists/${id}/reviews`)
    .then(res => {
        console.log("stylist review respsonse", res)
        dispatch({ type: ADD_REVIEW_SUCCESS, payload: res.data.id })
    })
    .catch(err => {
        console.log("stylist review error", err)
        dispatch({ type: ADD_REVIEW_FAILURE, payload: err })
    })
};
