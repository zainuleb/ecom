import React from 'react';
import styles from "./Category.module.css";

const Electronics = ({electronics}) => {
  return (
    <div className={styles.collection}>
      <div className={styles.inner_collection_wrapper}>
      <h2>ELECTRONICS COLLECTION</h2>
        <p>Top Rated Category</p>
        </div>
      <div className={styles.card_wrapper}>
        {electronics.map((prod) => {
          return (
            <div className={styles.inner_card}>
              <div className={styles.image_wrapper}>
                <img src={prod.image} alt="card-image" />
              </div>
              <div className={styles.desc_wrapper}>
                <div className={styles.title}>
                  <p>Electronics Collection</p>
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
}

export default Electronics
