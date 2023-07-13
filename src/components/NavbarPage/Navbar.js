import React from "react";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.sub_main}>
        <HashLink smooth to="#Home">
          <p className={styles.link}>Home</p>
        </HashLink>
        <HashLink smooth to="#Work">
          <p className={styles.link}>Work</p>
        </HashLink>
        <HashLink smooth to="#Tools">
          <p className={styles.link}>Tools & Skills</p>
        </HashLink>
        <HashLink smooth to="#Contact">
          <p className={styles.link}>Contact</p>
        </HashLink>
        <div >
        <a href="https://drive.google.com/file/d/1le_OOVZw_ajqz-pguaric2-HH4HPaCWB/view?usp=sharing" className={styles.btn}>DOWNLOAD RESUME</a>
        </div>

        {/*
        <p className={styles.link}>WORK</p>
        <p className={styles.link}>TOOLS & SKILLS</p>
        <p className={styles.link}>CONTACT</p>
         */}
      </div>
    </div>
  );
}

export default Navbar;
