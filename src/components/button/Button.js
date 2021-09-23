import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button className={styles.customButton} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
