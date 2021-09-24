import React from "react";
import { useDispatch } from "react-redux";
import allActions from "../../../redux/actions/index.js";

const AddToCartButton = ({ children, product }) => {
  //Actions Area
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(allActions.cartActions.addItemToCart(product));
    console.log("dispatch");
  };

  return <button onClick={addHandler}>{children}</button>;
};

export default AddToCartButton;
