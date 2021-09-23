import React from "react";
import styles from "./Header.module.css";

import { Link } from "react-router-dom";
import CartIcon from "../UI/cartIcon/CartIcon";
import CartDropDown from "../cartDropDown/CartDropDown";

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link to="/">
            <h1>Homepage</h1>
          </Link>
        </li>

        <li className={styles.listItem}>
          <Link to="/categories">
            <h1>Categories</h1>
          </Link>
        </li>

        <li className={styles.listItem}>
          <Link to="/cart">
            <CartIcon />
            <CartDropDown />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
