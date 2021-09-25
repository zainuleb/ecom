import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import styles from "./CartUI.module.css";

const CartUI = ({ cartList, total }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner_wrapper}>
        <div className={styles.left_flex}>
          <div className={styles.heading}>
            <h3>Your Shopping Cart</h3>
          </div>
          {cartList ? (
            cartList.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <div>Empty</div>
          )}
          <div className={styles.heading}>
            <Link to="/">Back to Shop</Link>
            <p>Sub Total : {total}</p>
          </div>
        </div>
        <div className={styles.right_flex}>
          <h3>Payment Methods</h3>
          <div className={styles.rightTop_flex}>
            <div className={styles.payment_wrapper}>
              <h5>Card Details</h5>
              <h5>/</h5>
              <h5>Cash Details</h5>
            </div>
            <div className={styles.payment_details}>
              <h6>Card Number</h6>
              <input />
              <h6>Expiry Date</h6>
              <input />
            </div>
          </div>

          <div className={styles.rightBottom_flex}>Checkout</div>
        </div>
      </div>
    </div>
  );
};

export default CartUI;
