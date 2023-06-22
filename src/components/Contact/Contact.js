import React from "react";
import styles from "./contact.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Footer from "./Footer";

function Contact() {
  return (
    <div className={styles.Contact_main}>
      <div className={styles.main}>
        <div className={styles.div1}>
          <p className={styles.anchor1}>Contact me</p>
          <p className={styles.email}>
            {" "}
            <MailOutlineIcon className={styles.icon} />{" "}
            devendraparsharam127@gmail.com
          </p>
          <p className={styles.phone}>
            {" "}
            <LocalPhoneOutlinedIcon className={styles.icon} />
            +91 7448237088
          </p>
        </div>
        <div className={styles.div2}>
          <p className={styles.div2P1}>Have an idea?</p>
          <p className={styles.div2P2}>Let's make something great!</p>
          <input type="text" placeholder="Name" className={styles.info} />
          <input type="email" placeholder="Email" className={styles.info} />
          <input type="text" placeholder="Message" className={styles.info} />
          <button className={styles.btn}>SEND</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
