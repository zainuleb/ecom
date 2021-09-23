import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router'
import styles from "./Category.module.css"

const Category = () => {
    const { category } = useParams();

    const [products, setProducts] = useState([]);
    
    const getData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
      

<div className={styles.collection}>
      <div className={styles.inner_collection_wrapper}>
          <h2>CATEGORY DETAIL </h2>
        <p>Top Rated Category</p>
      </div>
      <div className={styles.card_wrapper}>
        {products.map((prod) => {
          return (
            <div className={styles.inner_card}>
              <div className={styles.image_wrapper}>
                <img src={prod.image} alt="card-image" />
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
    )
}

export default Category
