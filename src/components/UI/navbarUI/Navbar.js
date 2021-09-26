import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/images/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="logo" />
      <div className={styles.social_icons}>
        <Link to="/home">
          <FontAwesomeIcon icon={faHome} className={styles.icon} />
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
