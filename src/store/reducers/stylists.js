import { FETCHING_STYLISTS_START, FETCHING_STYLISTS_SUCCESS, FETCHING_STYLISTS_FAILURE, SINGLE_STYLISTS_START, SINGLE_STYLISTS_SUCCESS, SINGLE_STYLISTS_FAILURE } from "../actions/stylists";

const initialState = {
    error: "",
    isFetching: false,
    stylists: [
        // {
        //     id: 1, // automatically generated
        //     username: "bianca",
        //     name: "Bianca Severino",
        //     email: "biancasev@gmail.com",
        //     password: "password", // will not return in requests
        //     location: "New Haven, CT",
        //     is_stylist: true,
        //     profile_url: "https://avatars0.githubusercontent.com/u/10442143",
        //     profile_info: "Hi this is my profile!"
        // }
    ]
};

export const stylistReducer = (state = initialState, action) => {
    switch(action.type) {
    case FETCHING_STYLISTS_START:
        return {
            ...state,
            isFetching: true,
            error: ""
        };
    case FETCHING_STYLISTS_SUCCESS:
        return {
            ...state,
            isFetching: false,
            error: "",
            stylists: action.payload
        };
    case FETCHING_STYLISTS_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.payload
        };
    case SINGLE_STYLISTS_START:
        return {
            ...state,
            isFetching: true,
            error: ""
        };
    case SINGLE_STYLISTS_SUCCESS:
        return {
            ...state,
            isFetching: false,
            stylists: state.stylists.map(stylist => stylist.id !== action.payload)
        };
    case SINGLE_STYLISTS_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.payload
        };
    default:
        return state;
    }
};