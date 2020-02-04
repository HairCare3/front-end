import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";

// FETCHING PHOTOS
export const FETCHING_PHOTOS_START = "FETCHING_PHOTOS_START", FETCHING_PHOTOS_SUCCESS = "FETCHING_PHOTOS_SUCCESS", FETCHING_PHOTOS_FAILURE = "FETCHING_PHOTOS_FAILURE";

// EDIT PHOTOS
export const EDIT_PHOTO_START = "EDIT_PHOTO_START", EDIT_PHOTO_SUCCESS = "EDIT_PHOTO_SUCCESS", EDIT_PHOTO_FAILURE = "EDIT_PHOTO_FAILURE";

// DELETE PHOTOS
export const DELETE_PHOTO_START = "DELETE_PHOTO_START", DELETE_PHOTO_SUCCESS = "DELETE_PHOTO_SUCCESS", DELETE_PHOTO_FAILURE = "DELETE_PHOTO_FAILURE";

export const addPhoto = () => dispatch => {
    dispatch({ type: FETCHING_PHOTOS_START })
    axios
    .post("https://haircare-api-3.herokuapp.com/api/photos")
    .then(res => {
        console.log(res)
        dispatch({ type: FETCHING_PHOTOS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log("fetching photo error", err) // most likely the payload will be err.response
        dispatch({ type: FETCHING_PHOTOS_FAILURE, payload: err})
    })
};

export const editPhoto = (id) => dispatch => {
    dispatch({ type: EDIT_PHOTO_START })
    axiosWithAuth()
    .put(`https://haircare-api-3.herokuapp.com/api/photos/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: EDIT_PHOTO_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: EDIT_PHOTO_FAILURE, payload: err })
    })
};

export const deletePhoto = (id) => dispatch => {
    dispatch({ type: DELETE_PHOTO_START })
    axiosWithAuth()
    .delete(`https://haircare-api-3.herokuapp.com/api/photos/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: DELETE_PHOTO_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: DELETE_PHOTO_FAILURE, payload: err })
    })
};