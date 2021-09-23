import React from "react";
import styles from "./CartDropDown.module.css";

import Button from "../button/Button.js";

const CartDropDown = () => {
  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems}></div>
      <span className={styles.button}>
        <Button> Check Out</Button>
      </span>
    </div>
  );
};

export default CartDropDown;
