import React, { useEffect, useState } from "react";
import styles from "./mainNavbar.module.css";
import Navbar from "./Navbar";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import Skills from "../Tools & Skills/ToolsLibraries";
import profile from "../assets/img_Aditya.jpg";

function MainNavbar() {
  const sentence =
    " Im a Front End Web Developer, specialised in ReactJS, love to implement my skills in developing beautiful websites and  functional user experiences.";
  const words = sentence.split(" ");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
    }, 200); // Change the delay here (in milliseconds) to adjust the speed of word display

    return () => {
      clearInterval(interval);
    };
  }, []);

  const sent = "I'm Aditya";
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetterIndex((prevIndex) => prevIndex + 1);
    }, 500); // Change the delay here (in milliseconds) to adjust the speed of letter display

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.navBar} id="Home">
      <div id="home" className={styles.main}>
        <div className={styles.nav}></div>

        <div className={styles.splitMain}>
          <div className={styles.split1}>
            <div className={styles.sub_main}>
              <a className={styles.anchor1}>Hi,</a>
              <br />
              <a className={styles.anchor1}>
                {" "}
                {sent.slice(0, currentLetterIndex)}
              </a>
              <p className={styles.para1}>I love building websites.</p>
              <div className={styles.about}>
                <p>
                  {words.slice(0, currentWordIndex).map((word, index) => (
                    <span key={index}>{word} </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.split2}>
            <img src={profile} className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
