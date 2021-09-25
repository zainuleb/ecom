import React from "react";
import styles from "./HomeCategoriesUI.module.css";

import { Link } from "react-router-dom";

const HomeCategoriesUI = ({ category, products }) => {
  return (
    <div className={styles.collection}>
      <div className={styles.inner_collection_wrapper}>
        <h2>{category} COLLECTION </h2>

        <p>Top Rated Category</p>
      </div>
      <div className={styles.card_wrapper}></div>
    </div>
  );
};

export default HomeCategoriesUI;
