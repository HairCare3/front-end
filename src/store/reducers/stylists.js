import { FETCHING_STYLISTS_START, FETCHING_STYLISTS_SUCCESS, FETCHING_STYLISTS_FAILURE } from "../actions/stylists";
import { SINGLE_STYLISTS_START, SINGLE_STYLISTS_SUCCESS, SINGLE_STYLISTS_FAILURE } from "../actions/stylists";
import { ADD_REVIEW_START, ADD_REVIEW_SUCCESS, ADD_REVIEW_FAILURE} from "../actions/stylists";

const initialState = {
    // token: localStorage.getItem("token"),
    error: "",
    isFetching: false,
    stylists: [
        {
            // id: 1, // automatically generated
            // username: "",
            // name: "",
            // email: "",
            // password: "", // will not return in requests
            // location: "",
            // is_stylist: true,
            // profile_url: "",
            // profile_info: "",
            photos: [
                // array of photos posted by stylist (excludes review photos)
                // {
                //     photo_id: "",
                //     user_id: "",
                //     description: "",
                //     img_url: ""
                // },
                // {
                //     photo_id: "",
                //     user_id: "",
                //     description: "This is another photo",
                //     img_url: "https://picsum.photos/500"
                // }
            ],
            reviews: [
                // array of reviews posted by customers
                {
                    // review_id: "",
                    // customer_id: "",
                    // stylist_id: "",
                    // photo_id: "",
                    // title: "",
                    // text: "",
                    // stylist_rating: "",
                    // haircut_rating: ""
                }
            ]
        }
    ]
};

export const stylists = (state = initialState, action) => {
    switch(action.type) {
    case FETCHING_STYLISTS_START:
        return {
            ...state,
            isFetching: true,
            error: "",
            // token: localStorage.getItem("token")
        };
    case FETCHING_STYLISTS_SUCCESS:
        return {
            ...state,
            isFetching: false,
            error: "",
            stylists: action.payload,
            // token: localStorage.getItem("token")
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
        case ADD_REVIEW_START:
            return {
                ...state,
                isFetching: true,
                error: "",
            };
        case ADD_REVIEW_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                reviews: action.payload,
            };
        case ADD_REVIEW_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
    default:
        return state;
    }

};