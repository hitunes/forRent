/*jshint esversion: 6 */
import { combineReducers } from "redux";
import { ProductReducer } from "./product";

export default combineReducers({
  product: ProductReducer,
});
