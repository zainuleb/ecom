import React from "react";
import styles from "./CartSummary.module.css";

const CartSummaryUI = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_wrapper}>
        <h1>DELIVERY DETAILS</h1>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="City Name" />
        <textarea placeholder="Address" cols="30" rows="8"></textarea>
        <button className={styles.submit_button}>SUMBIT</button>
      </div>
      <div className={styles.right_wrapper}>
        <h1>PRODUCT SUMMARY</h1>
        <div className={styles.product_wrapper}>
          <div className={styles.inner_wrapper}>
            <p>Title</p>
            <p>Price</p>
          </div>
        </div>
        <h4>Sub Total : 100$ </h4>
        <button className={styles.confirm_button}>CONFIRM </button>
      </div>
    </div>
  );
};

export default CartSummaryUI;
