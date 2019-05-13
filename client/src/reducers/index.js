import { combineReducers } from "redux";
import productReducer from "./productReducer";
import messageReducer from "./messageReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  product: productReducer,
  message: messageReducer,
  order: orderReducer
});
