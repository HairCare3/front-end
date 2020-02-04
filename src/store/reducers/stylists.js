import { FETCHING_STYLISTS_START, FETCHING_STYLISTS_SUCCESS, FETCHING_STYLISTS_FAILURE, SINGLE_STYLISTS_START, SINGLE_STYLISTS_SUCCESS, SINGLE_STYLISTS_FAILURE } from "../actions/stylists";

const stylists = {
    error: "",
    isFetching: false,
    stylistInfo: []
};

export const stylistReducer = (state = stylists, action) => {
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
            stylistInfo: action.payload
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
            stylistInfo: state.stylistInfo.map(stylist => stylist.id !== action.payload)
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