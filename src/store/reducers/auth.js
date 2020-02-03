import { AUTHENTICATE, START_LOGIN, LOGIN_FAILURE, SIGN_OUT } from "../actions/auth";

const initialState = {
  token: localStorage.getItem("token"),
  isLoading: false
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
        userType: action.userType,
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
        token: localStorage.getItem("token")
      };
    default:
      return state;
  }
};
