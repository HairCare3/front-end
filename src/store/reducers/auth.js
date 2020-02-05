import { AUTHENTICATE, START_LOGIN, LOGIN_FAILURE, SIGN_OUT } from "../actions/auth";

const initialState = {
    id: 1,
    username: null,
    password: null,
    // email: null,
    // location: null,
    is_stylist: null,
  
  // profile_url: "http://imgurl.com/img.jpg", // optional profile iamge
  // profile_info: "I am the user's profile description. I am optional and have no character limit."
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return {
        ...state,
        isLoading: true
      }
    case AUTHENTICATE:
      return {
        ...state,
        is_stylist: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case SIGN_OUT:
      return {
        ...state,
        token: localStorage.removeItem("token")
      };
    default:
      return state;
  }
};