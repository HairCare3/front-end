import { FETCHING_USERS_START, FETCHING_USERS_SUCCESS, FETCHING_USERS_FAILURE } from "../actions/users"; 
import { SINGLE_USER_START, SINGLE_USER_SUCCESS, SINGLE_USER_FAILURE} from "../actions/users"; 
import { EDIT_USER_START, EDIT_USER_SUCCESS, EDIT_USER_FAILURE} from "../actions/users"; 
import { DELETE_USER_START, DELETE_USER_SUCCESS, DELETE_USER_FAILURE } from "../actions/users";

const initialState = {
    error: "",
    isFetching: false,
    isEditing: false,
    isDeleting: false,
    is_stylist: false,
    userInfo: [
        // {
        //     id: 1, // automatically generated
        //     username: "",
        //     name: "",
        //     email: "",
        //     password: "", // will not return in requests
        //     location: "",
            
        //     profile_url: null,
        //     profile_info: ""
        // }
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
            error: "",
            userInfo: action.payload
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