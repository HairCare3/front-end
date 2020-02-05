import { AUTHENTICATE, START_LOGIN, LOGIN_FAILURE, SIGN_OUT } from "../actions/auth";

const initialState = {
    id: 1,
    username: null,
    is_stylist: null,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0IiwiaXNfc3R5bGlzdCI6dHJ1ZSwiaWF0IjoxNTgwODYzMTE4LCJleHAiOjE1ODA5NDk1MTh9.xaNg6qmVn5ThxG83cn2vgN2bmhd68reLM8de1wka-8c"
  // token: localStorage.getItem("token"),
  // isLoading: false,
  // username: "username",
  // password: "password",
  // email: "email@email.com",
  // location: "City, State",
  // is_stylist: true, // optional, will default to false if not given
  // // profile_url: "http://imgurl.com/img.jpg", // optional profile iamge
  // // profile_info: "I am the user's profile description. I am optional and have no character limit."
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
        token: localStorage.getItem("token")
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        userType: ''
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