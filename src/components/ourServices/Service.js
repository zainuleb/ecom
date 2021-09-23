import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./OurServices.module.css";

const Service = ({ heading , description , icon}) => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className={styles.services_div}>
          <FontAwesomeIcon icon={icon} />
          <h6>{heading}</h6>
          <p> {description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service
