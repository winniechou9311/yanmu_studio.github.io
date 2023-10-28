import { combineReducers } from "redux";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  // other reducers go here as you add them
});

export default rootReducer;
