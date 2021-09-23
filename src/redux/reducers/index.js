import products from "./products";
import productDetails from "./productDetails";
import cartItems from "./cartItems";
import categories from "./categories.js";
import specificCategory from "./specificCategory";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products,
  cartItems,
  categories,
  specificCategory,
  productDetails,
});

export default rootReducer;
