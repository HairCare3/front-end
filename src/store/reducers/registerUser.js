import { RESISTER_START, REGISTER_SUCCESSst, REGISTER_FAILURE } from "../actions/registerUser";

export const stylist = [
    {
        id: 1,
        name: "Bianca Severino",
        email: "biancasev@gmail.com",
        password: "password", // will not return in requests
        location: "New Haven, CT",
        is_stylist: true, // defaults to false if not given
        profile_url: "https://avatars0.githubusercontent.com/u/10442143", // optional
        profile_info: "Hi this is my profile!" // optional
    }
]

const registerReducer = (state = stylist, action) => {
    switch(action.type) {
        case RESISTER_START:
            return {
                ...state,

            }
    }
}