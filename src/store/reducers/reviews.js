import { FETCHING_REVIEWS_START, FETCHING_REVIEWS_SUCCESS, FETCHING_REVIEWS_FAILURE } from "../actions/reviews";
import { SINGLE_REVIEW_START, SINGLE_REVIEW_SUCCESS, SINGLE_REVIEW_FAILURE } from "../actions/reviews";
import { EDIT_REVIEW_START, EDIT_REVIEW_SUCCESS, EDIT_REVIEW_FAILURE } from "../actions/reviews";
import { DELETE_REVIEW_START, DELETE_REVIEW_SUCCESS, DELETE_REVIEW_FAILURE } from "../actions/reviews";

const initialState = {
    reviews: [],
    error: "",
    isFetching: false,
    isEditing: false,
    isDeleting: false,
};

export const reviews = (state = initialState, action) => {
    switch (action.type) {
    case FETCHING_REVIEWS_START:
        return {
            ...state,
            isFetching: true,
            error: ""
        };
    case FETCHING_REVIEWS_SUCCESS:
        return {
            ...state,
            isFetching: false,
            error: "",
            reviews: action.payload
        };
    case FETCHING_REVIEWS_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.payload
        };
    case SINGLE_REVIEW_START:
        return {
            ...state,
            isFetching: true,
            error: ""
        };
    case SINGLE_REVIEW_SUCCESS:
        return {
            ...state,
            isFetching: false,
            error: "",
            reviews: action.payload
        };
    case SINGLE_REVIEW_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.payload
        };
    case EDIT_REVIEW_START:
        const editReview = state.reviews.map(review => {
            if (Number(review.id) === Number(action.id)) {
                review.resolved = !review.resolved;
            }
            return review;
        });
        return {
            ...state,
            isEditing: true
        };
    case EDIT_REVIEW_SUCCESS:
        return {
            ...state,
            isEditing: false,
            reviews: [...state.reviews, action.payload]
        };
    case EDIT_REVIEW_FAILURE:
        return {
            ...state,
            isEditing: false,
            error: action.payload
        };
    case DELETE_REVIEW_START:
        return {
            ...state,
            isDeleting: true
        };
    case DELETE_REVIEW_SUCCESS:
        return {
            ...state,
            isDeleting: false,
            reviews: state.reviews.filter(review => review.id !== action.payload)
        };
    case DELETE_REVIEW_FAILURE:
        return {
            ...state,
            isDeleting: false,
            error: action.payload
        };
    default: 
        return state;
    }
};