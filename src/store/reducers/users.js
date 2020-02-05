import { FETCHING_USERS_START, FETCHING_USERS_SUCCESS, FETCHING_USERS_FAILURE, SINGLE_USER_START, SINGLE_USER_SUCCESS, SINGLE_USER_FAILURE, EDIT_USER_START, EDIT_USER_SUCCESS, EDIT_USER_FAILURE, DELETE_USER_START, DELETE_USER_SUCCESS, DELETE_USER_FAILURE } from "../actions/users";

const initialState = {
    error: "",
    isFetching: false,
    isEditing: false,
    isDeleting: false,
    users: [
        {
            id: 1, // automatically generated
            username: "isabela",
            name: "Isabela",
            email: "isabela@cat.com",
            password: "password", // will not return in requests
            location: "New Haven, CT",
            is_stylist: false,
            profile_url: null,
            profile_info: "I am a cat"
        }
    ]
};

export const users = (state = initialState, action) => {
    switch (action.type) {
    case FETCHING_USERS_START:
        return {
            ...state,
            isFetching: true,
            error: ""
        };
    case FETCHING_USERS_SUCCESS:
        return {
            ...state,
            isFetching: false,
            error: "",
            userInfo: action.payload
        };
    case FETCHING_USERS_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.payload
        };
    case SINGLE_USER_START:
        return {
            ...state,
            isFetching: true,
            error: ""
        };
    case SINGLE_USER_SUCCESS:
        return {
            ...state,
            isFetching: false,
            userInfo: state.userInfo.map(user => user.id !== action.payload)
        };
    case SINGLE_USER_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.payload
        };
    case EDIT_USER_START:
        return {
            ...state,
            isEditing: true
        };
    case EDIT_USER_SUCCESS:
        return {
            ...state,
            isEditing: false,
            userInfo: action.payload
        };
    case EDIT_USER_FAILURE:
        return {
            ...state,
            isEditing: false,
            error: action.payload
        };
    case DELETE_USER_START:
        return {
            ...state,
            isDeleting: true
        };
    case DELETE_USER_SUCCESS:
        return {
            ...state,
            isDeleting: false,
            userInfo: state.userInfo.filter(user => user.id !== action.payload)
        };
    case DELETE_USER_FAILURE:
        return {
            ...state,
            isDeleting: false,
            error: action.payload
        };
    default: 
        return state;
    }
};