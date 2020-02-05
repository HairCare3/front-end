import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE, SIGN_OUT } from "../actions/registerUser";

const initialState = {
        id: 1,
        name: null,
        email: null,
        password: null, // will not return in requests
        location: null,
        is_stylist: null, // defaults to false if not given
        isLoading: null
        // profile_url: "https://avatars0.githubusercontent.com/u/10442143", // optional
        // profile_info: "Hi this is my profile!" // optional
    };


export const registerUser = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_START:
            return {
                ...state,
                isLoading: true,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: true
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case SIGN_OUT:
            return {
                ...state,
                token: localStorage.removeItem("token")
            };
        default: return state;
    };
};