import { combineReducers } from "redux";
import { auth } from "./auth";
import { counter } from "./counter";
import { registerReducer } from "./registerUser";
import { userReducer } from "./users";
import { photoReducer } from "./photos";

// Using combine reducers to break up reducers into different files
export default combineReducers({
  auth,
  counter,
  registerReducer,
  userReducer,
  photoReducer
});
