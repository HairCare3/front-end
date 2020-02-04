import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions/registerUser";

const stylist = {
        id: 1,
        name: "Bianca Severino",
        email: "biancasev@gmail.com",
        password: "password", // will not return in requests
        location: "New Haven, CT",
        is_stylist: true, // defaults to false if not given
        profile_url: "https://avatars0.githubusercontent.com/u/10442143", // optional
        profile_info: "Hi this is my profile!" // optional
    };


export const registerReducer = (state = stylist, action) => {
    switch(action.type) {
        case REGISTER_START:
            return {
                ...state,
                isLoading: true,
                is_Stylist: true,
                is_User: true
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                userType: action.userType,
                username: action.username,
                password: action.password,
                email: action.email,
                location: action.location,
                isLoading: false,
                is_Stylist: true,
                is_User: true
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                error: "",
                userType: "",
                username: "",
                password: "",
                email: "",
                location: "",
                is_Stylist: false,
                is_User: false
            };
        default: return state;
    };
};