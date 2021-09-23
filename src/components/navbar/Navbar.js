import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHeart, faLock, faSearch, faWallet } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png"
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} />
      <div className={styles.social_icons}>
        <FontAwesomeIcon icon={faSearch}  />
        <FontAwesomeIcon icon={faHeart}  />
        <FontAwesomeIcon icon={faLock}  />
        <FontAwesomeIcon icon={faWallet}  />
      </div>
    </div>
  );
}

export default Navbar
