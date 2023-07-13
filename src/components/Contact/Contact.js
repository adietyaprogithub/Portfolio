import React, { useState } from "react";
import styles from "./contact.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Footer from "./Footer";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    // Send the message logic goes here

    // Display alert message
    alert("Message is sent");

    // Clear the input fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="Contact" className={styles.Contact_main}>
      <div className={styles.main}>
        <div className={styles.div1}>
          <p className={styles.anchor1}>Contact me</p>
          <p className={styles.email}>
            <MailOutlineIcon className={styles.icon} />
            adityashende9922@gmail.com
          </p>
          <p className={styles.phone}>
            <LocalPhoneOutlinedIcon className={styles.icon} />
            +91 9403458752
          </p>
        </div>
        <div className={styles.div2}>
          <p className={styles.div2P1}>Have an idea?</p>
          <p className={styles.div2P2}>Let's make something great!</p>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            className={styles.info}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className={styles.info}
          />
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={handleMessageChange}
            className={styles.info}
          />
          <button className={styles.btn} onClick={handleSubmit}>
            SEND
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
