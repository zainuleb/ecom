import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className={styles.footer_links}>
              <h6>QUESTIONS</h6>
              <ul>
                <li>
                  <Link to="#">How to buy</Link>
                </li>
                <li>
                  <Link to="#">Payment</Link>
                </li>
                <li>
                  <Link to="#">Shipping</Link>
                </li>
                <li>
                  <Link to="#">Track Order</Link>
                </li>
                <li>
                  <Link to="#">Returns</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className={styles.footer_links}>
              <h6>CATEGORIES</h6>
              <ul>
                <li>
                  <Link to="#">Women</Link>
                </li>
                <li>
                  <Link to="#">Men</Link>
                </li>
                <li>
                  <Link to="#">Kid</Link>
                </li>
                <li>
                  <Link to="#">New trend</Link>
                </li>
                <li>
                  <Link to="#">Sales</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className={styles.footer_links}>
              <h6>VOLG ONS</h6>
              <ul>
                <li>
                  <Link to="#">Facebook</Link>
                </li>
                <li>
                  <Link to="#">Twitter</Link>
                </li>
                <li>
                  <Link to="#">YouTube</Link>
                </li>
                <li>
                  <Link to="#">Instagram</Link>
                </li>
                <li>
                  <Link to="#">Pinterest</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className={styles.footer_links}>
              <h6>CONTACT US</h6>
              <p>Monday - Sunday: 09:00 - 22:00</p>
              <p>1123 7th Str, Ottawa, CA 96312</p>
              <p>
                <span to="#">+84.0248.3579</span>
              </p>
              <a href="mailto:zainulebadd@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lower_footer}>
        <div className="row">
          <div className="col-md-12">
            <p>
              © 2020 Layali Mode. Alle rechten voorbehoud. Design Touch Creation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
