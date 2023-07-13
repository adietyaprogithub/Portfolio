import React from "react";
import styles from "./footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className={styles.footerMain}>
      <div className={styles.div1}>
        <p className={styles.footer_para}>
          Handcrafted by me © Aditya Shende.
        </p>
        <p className={styles.footer_para}></p>
      </div>
      <div className={styles.footer_icons}>
        <a
          href=""
          target="_blank"
        >
          <FacebookIcon className={styles.icon} />
        </a>
        <a href="" target="_blank">
          <InstagramIcon className={styles.icon} />
        </a>
        <a
          href="https:/www.linkedin.com/in/aditya-shende-99a011265"
          target="_blank"
        >
          <LinkedInIcon className={styles.icon} />
        </a>
        <a href="https://github.com/adietyaprogithub" target="_blank">
          <GitHubIcon className={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
