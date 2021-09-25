import React, { useState } from "react";
import styles from "./CategoryUI.module.css";
import AddToCartButton from "../../buttons/addCartButton/AddToCartButton.js";
import DelFromCartButton from "../../buttons/delCartButton/DelFromCartButton.js";

const CategoryUI = ({ products }) => {
  const [toggle, setToggle] = useState(false);

  const triggerToggle = () => {
    setToggle(!toggle);
    console.log("jere");
  };

  return (
    <div className={styles.collection}>
      <div className={styles.inner_collection_wrapper}>
        <h2>CATEGORY DETAIL </h2>
        <p>Top Rated Category</p>
      </div>
      <div className={styles.card_wrapper}>
        {products.map((prod) => {
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

                  <AddToCartButton onClick={triggerToggle} product={prod}>
                    Add to Cart
                  </AddToCartButton>

                  <DelFromCartButton onClick={triggerToggle} product={prod}>
                    Delete
                  </DelFromCartButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryUI;
