import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import headerReducer from "./headerReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  books: bookReducer,
  header: headerReducer,
  cart: cartReducer
});
