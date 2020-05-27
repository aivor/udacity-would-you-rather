import { combineReducers } from "redux";
import users from "../Reducers/users";
import questions from "../Reducers/questions";
import authedUser from "../Reducers/authenticatedUser";
import loggedIn from "../Reducers/loggedin";
import poll from "../Reducers/poll";

export default combineReducers({
  loggedIn,
  users,
  authedUser,
  questions,
  poll,
});
