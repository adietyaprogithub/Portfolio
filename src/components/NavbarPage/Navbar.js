import React from "react";
import styles from "./navbar.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.sub_main}>
        <p className={styles.para}>HOME</p>
        <p className={styles.para}>WORK</p>
        <p className={styles.para}>TOOLS & SKILLS</p>
        <p className={styles.para}>CONTACT</p>
        <button className={styles.btn}>
          DOWNLOAD RESUME{" "}
          <a className={styles.dwnldIcon}>
            <ArrowDownwardIcon />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
