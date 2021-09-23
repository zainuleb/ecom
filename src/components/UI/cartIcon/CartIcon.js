import React from "react";
import styles from "./CartIcon.module.css";
import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";

const CartIcon = () => {
  return (
    <div className={styles.cartIcon}>
      <ShoppingIcon className={styles.shoppingIcon} />
      <span className={styles.itemCount}>0</span>
    </div>
  );
};

export default CartIcon;
