import axiosWithAuth from "../../utils/axiosWithAuth";

// FETCHING REVIEWS
export const FETCHING_REVIEWS_START = "FETCHING_REVIEWS_START", FETCHING_REVIEWS_SUCCESS = "FETCHING_REVIEWS_SUCCESS", FETCHING_REVIEWS_FAILURE = "FETCHING_REVIEWS_FAILURE";

// SINGLE REVIEW
export const SINGLE_REVIEW_START = "SINGLE_REVIEW_START", SINGLE_REVIEW_SUCCESS = "SINGLE_REVIEW_SUCCESS", SINGLE_REVIEW_FAILURE = "SINGLE_REVIEW_FAILURE";

// EDIT REVIEW
export const EDIT_REVIEW_START = "EDIT_REVIEW_START", EDIT_REVIEW_SUCCESS = "EDIT_REVIEW_SUCCESS", EDIT_REVIEW_FAILURE = "EDIT_REVIEW_FAILURE";

// DELETE REVIEW
export const DELETE_REVIEW_START = "DELETE_REVIEW_START", DELETE_REVIEW_SUCCESS = "DELETE_REVIEW_SUCCESS", DELETE_REVIEW_FAILURE ="DELETE_REVIEW_FAILURE";

export const fetchReviews = () => dispatch => {
    dispatch({ type: FETCHING_REVIEWS_START })
    axiosWithAuth()
    .get("/reviews")
    .then(res => {
        console.log(res)
        dispatch({ type: FETCHING_REVIEWS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log("fetching reviews error", err)
        dispatch({ type: FETCHING_REVIEWS_FAILURE, payload: err})
    })
};

export const fetchReviewId = (id) => dispatch => {
    dispatch({ type: SINGLE_REVIEW_START })
    axiosWithAuth()
    .get(`/reviews/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: SINGLE_REVIEW_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log("get review by id", err)
        dispatch({ type: SINGLE_REVIEW_FAILURE })
    })
};

export const editReview = (id) => dispatch => {
    dispatch({ type: EDIT_REVIEW_START })
    axiosWithAuth()
    .put(`/reviews/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: EDIT_REVIEW_SUCCESS, payload: id })
    })
    .catch(err => dispatch({ type: EDIT_REVIEW_FAILURE, payload: err}))
}

export const removeReview = (id) => dispatch => {
    dispatch({ type: DELETE_REVIEW_START })
    axiosWithAuth()
    .delete(`/reviews/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: DELETE_REVIEW_SUCCESS, payload: id })
    })
    .catch(err => dispatch({ type: DELETE_REVIEW_FAILURE, payload: err}))
}