import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="{styles.content}">
        <p>&copy; {new Date().getFullYear()} Intro Foods. All rights reserved.</p>
        {/* <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul> */}
      </div>
    </footer>
  );
}