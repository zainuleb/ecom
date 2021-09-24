import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCartPlus, faHeart, faLock, faSearch, faWallet } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} />
      <div className={styles.social_icons}>
        <FontAwesomeIcon icon={faSearch} className={styles.cart} />
        <FontAwesomeIcon icon={faHeart} className={styles.cart} />
        <FontAwesomeIcon icon={faLock} className={styles.cart} />
        <Link to="/cart" >
          <FontAwesomeIcon icon={faCartPlus} className={styles.cart} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar
