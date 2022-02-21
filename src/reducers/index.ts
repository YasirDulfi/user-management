import { combineReducers } from "redux";

//Reducers
import loginReducer from "./login";
import userReducer from "./user";

export const rootReducer = combineReducers({
  user: userReducer,
  authorization: loginReducer
});
