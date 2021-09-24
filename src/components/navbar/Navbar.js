import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="logo" />
      <div className={styles.social_icons}>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} className={styles.cart} />
        </Link>

        <FontAwesomeIcon icon={faHeart} className={styles.cart} />
        <FontAwesomeIcon icon={faUser} className={styles.cart} />
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartPlus} className={styles.cart} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
