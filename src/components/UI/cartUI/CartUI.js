import React from "react";
import { Link } from "react-router-dom";
import testing from "../../../assets/images/testing.png";
import styles from "./Cart.module.css";

const CartUI = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner_wrapper}>
        <div className={styles.left_flex}>
          <div className={styles.heading}>
            <h3>Your Shopping Cart</h3>
          </div>
          <div className={styles.left_inner_wrapper}>
            <div className={styles.image_wrapper}>
              <img src={testing} />
            </div>
            <div className={styles.title_wrapper}> Title here</div>
            <div className={styles.title_wrapper}>Blue</div>
            <div className={styles.counter_wrapper}>
              <button>-</button>1<button>+</button>
            </div>
            <div className={styles.price_wrapper}>750$</div>
          </div>
          <div className={styles.heading}>
            <Link to="/">Back to Shop</Link>
            <p>Sub Total : 2000$</p>
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
