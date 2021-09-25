import styles from "./CategoryUI.module.css";
import AddToCartButton from "../../buttons/addCartButton/AddToCartButton.js";
import DelFromCartButton from "../../buttons/delCartButton/DelFromCartButton.js";

const CategoryUI = ({ products }) => {
  return (
    <div className={styles.collection}>
      <div className={styles.inner_collection_wrapper}>
        <h2>CATEGORY DETAIL </h2>
        <p>Top Rated Category</p>
      </div>
    </div>
  );
};

export default CategoryUI;
