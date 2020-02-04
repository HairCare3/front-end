import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";

// FETCHING STYLISTS
export const FETCHING_STYLISTS_START = "FETCHING_STYLISTS_START", FETCHING_STYLISTS_SUCCESS = "FETCHING_STYLISTS_SUCCESS", FETCHING_STYLISTS_FAILURE = "FETCHING_STYLISTS_FAILURE";

// FETCHING SINGLE STYLISTS
export const SINGLE_STYLISTS_START = "SINGLE_STYLISTS_START", SINGLE_STYLISTS_SUCCESS = "SINGLE_STYLISTS_SUCCESS", SINGLE_STYLISTS_FAILURE = "SINGLE_STYLISTS_FAILURE";

export const fetchStylists = () => dispatch => {
    dispatch({ type: FETCHING_STYLISTS_START })
    axiosWithAuth()
    .get("https://haircare-api-3.herokuapp.com/api/stylists")
    .then(res => {
        console.log(res) // most likely the payload will be res.data
        dispatch({ type: FETCHING_STYLISTS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log("fetching stylist error", err) // most likely the payload will be err.response
        dispatch({ type: FETCHING_STYLISTS_FAILURE, payload: err})
    })
};

export const fetchStylistsId = (id) => dispatch => {
    dispatch({ type: SINGLE_STYLISTS_START })
    axios
    .get(`https://haircare-api-3.herokuapp.com/api/users/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: SINGLE_STYLISTS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log("get user by id", err)
        dispatch({ type: SINGLE_STYLISTS_FAILURE })
    })
};