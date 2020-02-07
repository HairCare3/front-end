import { combineReducers } from "redux";
import { auth } from "./auth";
import { counter } from "./counter";
import { registerUser } from "./registerUser";
import { users } from "./users";
import { photos } from "./photos";
import { stylists } from "./stylists"
import { reviews } from "./reviews"

// Using combine reducers to break up reducers into different files
export default combineReducers({
  auth,
  counter,
  photos,
  registerUser,
  stylists,
  users,
  reviews
});
