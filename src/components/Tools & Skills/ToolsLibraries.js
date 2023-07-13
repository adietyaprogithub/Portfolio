import React from "react";
import styles from "./tools.module.css";

export default function Skills() {
  return (
    <div id="Tools" className={styles.main}>
      <div className={styles.container}>
        <a className={styles.text}>
          {" "}
          My Tools <a className={styles.middle}> & </a> Skills{" "}
        </a>
        <span className={styles.span}>Tools I work With </span>
      </div>
      <div className={styles.multiplebox}>
        <div className={styles.multiplebox1}>
          <div className={styles.box}>
            <p className={styles.para}>
              <img
                src="https://rohitmahajan.netlify.app/images/html.png"
                alt="HTML"
                className={styles.imgr}
              />{" "}
              HTML
            </p>
          </div>
          <div className={styles.box}>
            <p className={styles.para}>
              <img
                src="https://rohitmahajan.netlify.app/images/csscolor.png"
                alt="CSS"
                className={styles.imgr}
              />
              CSS
            </p>
          </div>
          <div className={styles.box}>
            <p className={styles.para}>
              <img
                src="https://logowik.com/content/uploads/images/javascript.jpg"
                alt="Javascript"
                className={styles.imgr_RJ}
              />
              Javascript
            </p>
          </div>
          <div className={styles.box}>
            <p className={styles.para}>
              <img
                src="https://rohitmahajan.netlify.app/images/react.png"
                alt="ReactJS"
                className={styles.imgr_RJ}
              />
              ReactJS
            </p>
          </div>
          <div className={styles.box}>
            <p className={styles.para}>
              <img
                src="https://rohitmahajan.netlify.app/images/redux.png"
                alt="Redux"
                className={styles.imgr}
              />
              Redux
            </p>
          </div>
        </div>
        <div className={styles.multiplebox1}>
          <div className={styles.box}>
            <p className={styles.para}>
              <img
                src="https://rohitmahajan.netlify.app/images/git.png"
                alt="Git/GitHub"
                className={styles.imgr}
              />
              Git/GitHub
            </p>
          </div>
          <div className={styles.box}>
            <p className={styles.para}>
              <img
                src="https://mui.com/static/logo.png"
                alt="Material UI"
                className={styles.imgr}
              />
              Material UI
            </p>
          </div>
          <div className={styles.box}>
            <p className={styles.para}>
              <img
                src="https://rohitmahajan.netlify.app/images/tailwind.jpg"
                alt="Tailwind CSS"
                className={styles.imgr}
              />
              Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
