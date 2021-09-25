import React, { useState, useEffect } from "react";
import styles from "./ProductCardUI.module.css";

//Redux Import
import { useSelector } from "react-redux";

//Buttons Import
import AddToCartButton from "../../buttons/AddToCartButton.js";
import DelFromCartButton from "../../buttons/DelFromCartButton.js";

const ProductCardUI = ({ prod }) => {
  const { cartItems } = useSelector((state) => state.cartReducer);

  const [cart, setCart] = useState(false);
  useEffect(() => {
    if (cartItems.includes(prod)) {
      setCart(true);
    } else {
      setCart(false);
    }
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <div key={prod.id} className={styles.inner_card}>
      <div className={styles.image_wrapper}>
        <img src={prod.image} alt={prod.title} />
      </div>
      <div className={styles.desc_wrapper}>
        <div className={styles.desc_inner_wrapper}>
          <p>{prod.title.substring(0, 10)}</p>
          <p>$ {prod.price}</p>
        </div>
        <div className={styles.desc_inner_wrapper}>
          <button className={styles.cart_btn}>Details...</button>

          {cart ? (
            <DelFromCartButton product={prod}>Remove</DelFromCartButton>
          ) : (
            <AddToCartButton product={prod}>Add</AddToCartButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCardUI;
