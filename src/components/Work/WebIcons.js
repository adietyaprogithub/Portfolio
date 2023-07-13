import React from "react";
import styles from "./webIcons.module.css";

function WebIcons() {
  return (
    <div className={styles.main}>
      <a
        href="https://github.com/adietyaprogithub"
        target="_blank"
        className={styles.anchor}
      >
        <p className={styles.para}>
          <img
            src="https://rohitmahajan.netlify.app/images/github.png"
            alt="GitHub Icon"
            className={styles.icon}
          />
          GitHub
        </p>
      </a>
      <a
        href="https:/www.linkedin.com/in/aditya-shende-99a011265"
        target="_blank"
        className={styles.anchor}
      >
        <p className={styles.para}>
          <img
            src="https://rohitmahajan.netlify.app/images/linkedincolor.png"
            alt="LinkedIn Icon"
            className={styles.icon}
          />
          LinkedIn
        </p>
      </a>
      <a href="" target="_blank" className={styles.anchor}>
        <p className={styles.para}>
          <img
            src="https://rohitmahajan.netlify.app/images/instagram.png"
            alt="Instagram Icon"
            className={styles.icon}
          />
          Instagram
        </p>
      </a>
    </div>
  );
}

export default WebIcons;
