import jwtTokenReducer from "./jwtToken";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  jwtToken: jwtTokenReducer,
});

export default allReducers;
