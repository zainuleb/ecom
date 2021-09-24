import React from "react";
import styles from "./HomeCategoriesUI.module.css";

import { Link } from "react-router-dom";

const HomeCategoriesUI = ({ category, products }) => {
  return (
    <div className={styles.collection}>
      <div className={styles.inner_collection_wrapper}>
        <Link to={`/category/${category}`} className={styles.collection_link}>
          <h2>{category} COLLECTION </h2>
        </Link>
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
                  <p>{prod.title.substring(0, 15)}</p>
                  <p>$ {prod.price}</p>
                </div>
                <div className={styles.desc_inner_wrapper}>
                  <button className={styles.cart_btn}>Details...</button>
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

export default HomeCategoriesUI;
