import { FETCHING_PHOTOS_START, FETCHING_PHOTOS_SUCCESS, FETCHING_PHOTOS_FAILURE, EDIT_PHOTO_START, EDIT_PHOTO_SUCCESS, EDIT_PHOTO_FAILURE, DELETE_PHOTO_START, DELETE_PHOTO_SUCCESS, DELETE_PHOTO_FAILURE } from "../actions/photos";

const photos = {
    id: 1, // automatically generated
    user_id: 2, // generated based on the id of the logged in user
    img_url: "https://picsum.photos/500",
    description: "This is a photo description.", // optional
    error: "",
    isFetching: false,
    isEditing: false,
    isDeleting: false,
    photo: []
}
export const photoReducer = (state = photos, action) => {
    switch (action.type) {
    case FETCHING_PHOTOS_START:
        return {
            ...state,
            isFetching: true,
            error: ""
        };
    case FETCHING_PHOTOS_SUCCESS:
        return {
            ...state,
            isFetching: false,
            error: "",
            photo: action.payload
        };
    case FETCHING_PHOTOS_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.payload
        };
    case EDIT_PHOTO_START:
        return {
            ...state,
            isEditing: true
        };
    case EDIT_PHOTO_SUCCESS:
        return {
            ...state,
            isEditing: false,
            photo: action.payload
        };
    case EDIT_PHOTO_FAILURE:
        return {
            ...state,
            isEditing: false,
            error: action.payload
        };
    case DELETE_PHOTO_START:
        return {
            ...state,
            isDeleting: true
        };
    case DELETE_PHOTO_SUCCESS:
        return {
            ...state,
            isDeleting: false,
            photo: state.userInfo.filter(photo => photo.id !== action.payload)
        };
    case DELETE_PHOTO_FAILURE:
        return {
            ...state,
            isDeleting: false,
            error: action.payload
        };
    default: 
        return state;
    }
};