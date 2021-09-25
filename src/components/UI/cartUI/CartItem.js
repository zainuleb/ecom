import React from "react";
import styles from "./CartUI.module.css";

import AddToCartButton from "../../buttons/AddToCartButton";
import DelFromCartButton from "../../buttons/DelFromCartButton";

//Redux Import
import { useSelector } from "react-redux";

const CartItem = ({ item }) => {
  const [{ quantity }] = useSelector((state) => state.cartReducer.cartItems);
  return (
    <div className={styles.left_inner_wrapper}>
      <div className={styles.image_wrapper}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles.title_wrapper}> {item.title}</div>
      <div className={styles.title_wrapper}>{item.category}</div>
      <div className={styles.counter_wrapper}>
        <AddToCartButton product={item}>++++</AddToCartButton>
        {quantity ? <span>{quantity}</span> : <></>}
        <DelFromCartButton product={item}>----</DelFromCartButton>
      </div>
      <div className={styles.price_wrapper}>{item.price}</div>
    </div>
  );
};

export default CartItem;
