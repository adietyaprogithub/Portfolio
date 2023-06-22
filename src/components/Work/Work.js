import React from "react";
import styles from "./work.module.css";
import WebIcons from "./WebIcons";

function Work() {
  return (
    <div className={styles.main}>
      <div>
        <a className={styles.anchor}>
          Work speaks <a className={styles.louder}>louder</a>{" "}
        </a>
        <a className={styles.anchor}>than words.</a>
      </div>
      <p className={styles.para}>
        I’ll help <a style={{ color: "red" }}>visualize your creative ideas.</a>{" "}
        From web design to developing user friendly wesites.
      </p>
      <div className={styles.box}>
        <div className={styles.page1}>
          <p className={styles.project}>Twitter Clone</p>
          <div className={styles.lorem}>
            <a>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              dolorum iste et quaerat voluptates ab labore facilis harum enim
              delectus.
            </a>
          </div>
          <a className={styles.para3}>GITHUB LINK</a>
          <a className={styles.para3}>VISIT WEBSITES</a>
          <div className={styles.buttons}>
            <button className={styles.btn}>HTML</button>
            <button className={styles.btn}>CSS</button>
            <button className={styles.btn}>Javascript</button>
            <button className={styles.btn}>ReactJs</button>
          </div>
          <p className={styles.yr}>2023</p>
        </div>
        <div className={styles.page2}></div>
      </div>

      <div className={styles.box}>
        <div className={styles.page1}>
          <p className={styles.project}>Project 2</p>
          <div className={styles.lorem}>
            <a>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              dolorum iste et quaerat voluptates ab labore facilis harum enim
              delectus.
            </a>
          </div>
          <a className={styles.para3}>GITHUB LINK</a>
          <a className={styles.para3}>VISIT WEBSITES</a>
          <div className={styles.buttons}>
            <button className={styles.btn}>HTML</button>
            <button className={styles.btn}>CSS</button>
            <button className={styles.btn}>Javascript</button>
            <button className={styles.btn}>ReactJs</button>
          </div>
          <p className={styles.yr}>2023</p>
        </div>
        <div className={styles.page2}></div>
      </div>

      <div className={styles.box}>
        <div className={styles.page1}>
          <p className={styles.project}>Project 3</p>
          <div className={styles.lorem}>
            <a>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              dolorum iste et quaerat voluptates ab labore facilis harum enim
              delectus.
            </a>
          </div>
          <a className={styles.para3}>GITHUB LINK</a>
          <a className={styles.para3}>VISIT WEBSITES</a>
          <div className={styles.buttons}>
            <button className={styles.btn}>HTML</button>
            <button className={styles.btn}>CSS</button>
            <button className={styles.btn}>Javascript</button>
            <button className={styles.btn}>ReactJs</button>
          </div>
          <p className={styles.yr}>2023</p>
        </div>
        <div className={styles.page2}></div>
      </div>

      <div className={styles.div3}>
        <p className={styles.webHead}>
          On the <a className={styles.web}>web</a>
        </p>
        <a className={styles.webAnchor}>Find me on social media</a>
        <br />
        <WebIcons />
      </div>
    </div>
  );
}

export default Work;
