import React from "react";
import { useDispatch } from "react-redux";
import allActions from "../../../redux/actions/index.js";

const DelFromCartButton = ({ children, product }) => {
  //Actions Area
  const dispatch = useDispatch();

  const delHandler = () => {
    dispatch(allActions.cartActions.delItemFromCart(product.id));
    console.log("del dispatch");
  };

  return <button onClick={delHandler}>{children}</button>;
};

export default DelFromCartButton;
