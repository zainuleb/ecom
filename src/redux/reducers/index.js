import products from "./products";
import productDetails from "./productDetails";

import categories from "./categories.js";
import specificCategory from "./specificCategory";

import cartToggle from "./cartToggle.js";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products,
  cartToggle,
  categories,
  specificCategory,
  productDetails,
});

export default rootReducer;
