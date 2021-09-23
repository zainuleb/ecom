import React from "react";
import styles from "./Category.module.css";

const Women = ({ women }) => {
  return (
    <div className={styles.collection}>
      <div className={styles.inner_collection_wrapper}>
        <h2>WOMEN'S COLLECTION</h2>
        <p>Top Rated Category</p>
      </div>
      <div className={styles.card_wrapper}>
        {women.map((prod) => {
          return (
            <div className={styles.inner_card}>
              <div className={styles.image_wrapper}>
                <img src={prod.image} alt="card-image" />
              </div>
              <div className={styles.desc_wrapper}>
                <div className={styles.title}>
                  <p>Women Collection</p>
                </div>
                <div className={styles.desc_inner_wrapper}>
                  <p>$ {prod.price}</p>
                  <button className={styles.cart_btn}>Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Women;
