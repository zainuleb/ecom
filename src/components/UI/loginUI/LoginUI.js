import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faUser, faWater} from '@fortawesome/free-solid-svg-icons'
import styles from "./LoginUI.module.css";

const LoginUI = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form_wrapper}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <h4>SIGN IN</h4>
        <div className={styles.inner_form_wrapper}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="*******" />
          <button className={styles.login_button}>Login</button>
        </div>
        <div className={styles.bottom_wrapper}>
          Dont have an Account ? <span>Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default LoginUI
