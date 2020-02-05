import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions/registerUser";

const stylist = {
        username: "username",
        password: "password"
}


export const registerUser = (state = stylist, action) => {
    switch(action.type) {
        case REGISTER_START:
            return {
                ...state,
                isLoading: true
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                userType: action.userType,
                username: action.username,
                password: action.password,
                email: action.email,
                location: action.location,
                isLoading: false
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                error: "",
                userType: "",
                username: "",
                password: "",
                email: "",
                location: ""
            };
        default: return state;
    };
};