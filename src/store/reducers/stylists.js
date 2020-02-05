import { FETCHING_STYLISTS_START, FETCHING_STYLISTS_SUCCESS, FETCHING_STYLISTS_FAILURE, SINGLE_STYLISTS_START, SINGLE_STYLISTS_SUCCESS, SINGLE_STYLISTS_FAILURE } from "../actions/stylists";

const initialState = {
    token: localStorage.getItem("token"),
    error: "",
    isFetching: false,
    stylists: [
        {
            id: 1, // automatically generated
            username: "test",
            name: "Test Stylist",
            email: "test@gmail.com",
            password: "password", // will not return in requests
            location: "New Haven, CT",
            is_stylist: true,
            profile_url: "https://avatars0.githubusercontent.com/u/10442143",
            profile_info: "Hi this is my profile!",
            photos: [
                // array of photos posted by stylist (excludes review photos)
                {
                    "photo_id": 1,
                    "user_id": 1,
                    "description": "This is a photo",
                    "img_url": "https://picsum.photos/400"
                },
                {
                    "photo_id": 2,
                    "user_id": 1,
                    "description": "This is another photo",
                    "img_url": "https://picsum.photos/500"
                }
            ],
            reviews: [
                // array of reviews posted by customers
                {
                    "review_id": 1,
                    "customer_id": 2,
                    "stylist_id": 1,
                    "photo_id": 3,
                    "title": "This is a review",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan nulla a elit hendrerit porta. Nam nec mollis velit. Nulla et ipsum sit amet quam fermentum interdum. In quis enim vulputate, convallis velit in, vehicula mauris. Mauris blandit arcu nisl, nec finibus augue molestie in. Sed vitae facilisis nisi.",
                    "stylist_rating": 5,
                    "haircut_rating": 5
                }
            ]
        }
    ]
};

export const stylistReducer = (state = initialState, action) => {
    switch(action.type) {
    case FETCHING_STYLISTS_START:
        return {
            ...state,
            isFetching: true,
            error: "",
            token: localStorage.getItem("token")
        };
    case FETCHING_STYLISTS_SUCCESS:
        return {
            ...state,
            isFetching: false,
            error: "",
            stylists: action.payload,
            token: localStorage.getItem("token")
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