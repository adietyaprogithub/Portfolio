import React from "react";
import styles from "./mainNavbar.module.css";
import Navbar from "./Navbar";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import Skills from "../Tools & Skills/ToolsLibraries";
import img1 from './img1.jpg'

function MainNavbar() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.splitMain}>
        <div className={styles.split1}>
          <div className={styles.sub_main}>
            <a className={styles.anchor1}>Hi,</a>
            <br />
            <a className={styles.anchor1}>I'm Devendra.</a>
            <p className={styles.para1}>I love building websites.</p>
            <div className={styles.about}>
              <p>
                I'm a Front End Web Developer, specialised in ReactJS, love to
                implement my skills in developing beautiful websites and
                functional user experiences.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.split2}>
        <img src={img1} className={styles.img}/>
        </div>
      </div>
      <Work />
      <Skills/>
      <Contact />
    </div>
  );
}

export default MainNavbar;
