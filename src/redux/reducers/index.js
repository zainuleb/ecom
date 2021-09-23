import products from "./products";
import productDetails from "./productDetails";
import cartItems from "./cartItems";
import categories from "./categories.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products,
  cartItems,
  categories,
  productDetails,
});

export default rootReducer;
