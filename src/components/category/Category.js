import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions/index.js";
import { useParams } from "react-router";
import styles from "./Category.module.css"

const Category = () => {
  const { category } = useParams();

  //Actions Area
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.categoriesActions.fetchSpecificCategory(category));
    // eslint-disable-next-line
  }, []);

  const { specificCategory } = useSelector((state) => state.specificCategory);

  const [products, setProducts] = useState([]);

  const getData = async () => {
    if (specificCategory.length > 0) {
      setProducts(specificCategory);
    }
  };

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [specificCategory]);

  return (
    <div className={styles.div}>
      <div className={styles.inner_collection_wrapper}>
        <h2>CATEGORY DETAIL </h2>
        <p>Top Rated Category</p>
      </div>
      <div className={styles.card_wrapper}>
        {products.map((prod) => {
          return (
            <div className={styles.inner_card}>
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

export default Category;
