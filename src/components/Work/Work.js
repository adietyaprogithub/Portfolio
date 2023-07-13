import React from "react";
import styles from "./work.module.css";
import WebIcons from "./WebIcons";
import MyImage1 from "../assets/Twitter-log.png";
import MyImage2 from "../assets/twitter_clone.jpg";
import MyDocs from "../assets/Docs.png";
import MyBlog from "../assets/screenshot.png";
import mypg from "../assets/House.png";

function Work() {
  return (
    <div id="Work" className={styles.main}>
      <div className={styles.write}>
        <a className={styles.anchor}>
          Work speaks <a className={styles.louder}>louder</a>{" "}
        </a>
        <a className={styles.anchor}>than words.</a>
        <p className={styles.para}>
          I’ll help{" "}
          <a style={{ color: "red" }}>visualize your creative ideas.</a> From
          web design to developing user friendly wesites.
        </p>
      </div>

      <div className={styles.box}>
        <div className={styles.page1}>
          <p className={styles.project}>PGHousing.com</p>
          <div className={styles.lorem}>
            <ol>
              Created Website for the people who want to live in the PG houses.
            </ol>
          </div>
          <a
            className={styles.para3}
            href="https://github.com/adietyaprogithub/PGHousing.com"
          >
            GITHUB LINK
          </a>
          <a className={styles.para3} href="https://pg-housing-com.vercel.app/">
            VISIT WEBSITES
          </a>
          <div className={styles.buttons}>
            <button className={styles.btn}>HTML</button>
            <button className={styles.btn}>CSS</button>
            <button className={styles.btn}>Javascript</button>
            <button className={styles.btn}>ReactJs</button>
          </div>
          <p className={styles.yr}>2023</p>
        </div>
        <div className={styles.page2}>
          <img className={styles.imgr} src={mypg} />
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.page1}>
          <p className={styles.project}>Twitter Clone</p>
          <div className={styles.lorem}>
            <ol>
              Created Twitter clone to tweet posting, follow ,engagement
              features , drag and drop , login, and Redux.
            </ol>
          </div>
          <a
            className={styles.para3}
            href="https://github.com/adietyaprogithub/Twitter-Clone/blob/new-Twitter/README.md"
          >
            GITHUB LINK
          </a>
          <a
            className={styles.para3}
            href="https://twitter-clone-777.netlify.app/"
          >
            VISIT WEBSITES
          </a>
          <div className={styles.buttons}>
            <button className={styles.btn}>HTML</button>
            <button className={styles.btn}>CSS</button>
            <button className={styles.btn}>Javascript</button>
            <button className={styles.btn}>ReactJs</button>
          </div>
          <p className={styles.yr}>2023</p>
        </div>
        <div className={styles.page2}>
          <img className={styles.imgr} src={MyImage2} alt="" />
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.page1}>
          <p className={styles.project}>Kanban Board</p>
          <div className={styles.lorem}>
            <ol>
              Created a Kanban board project that facilitates efficient task
              management workflow processes.
            </ol>
          </div>
          <a
            className={styles.para3}
            href="https://github.com/adietyaprogithub/kanban/blob/complete/README.md"
          >
            GITHUB LINK
          </a>
          <a
            className={styles.para3}
            href="https://kanban-seven-ashy.vercel.app/"
          >
            VISIT WEBSITES
          </a>
          <div className={styles.buttons}>
            <button className={styles.btn}>HTML</button>
            <button className={styles.btn}>CSS</button>
            <button className={styles.btn}>Javascript</button>
            <button className={styles.btn}>ReactJs</button>
          </div>
          <p className={styles.yr}>2023</p>
        </div>
        <div className={styles.page2}>
          <img
            className={styles.imgr}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Abstract_Kanban_Board.svg"
            alt=""
          />
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.page1}>
          <p className={styles.project}>Google Docs</p>
          <div className={styles.lorem}>
            <ol>
              Created a collaborative document editing platform inspired by
              Google Docs.
            </ol>
          </div>
          <a
            className={styles.para3}
            href="https://github.com/adietyaprogithub/Google-Doc/blob/newgoogle/README.md"
          >
            GITHUB LINK
          </a>
          <a className={styles.para3} href="https://google-docs-7.netlify.app/">
            VISIT WEBSITES
          </a>
          <div className={styles.buttons}>
            <button className={styles.btn}>HTML</button>
            <button className={styles.btn}>CSS</button>
            <button className={styles.btn}>Javascript</button>
            <button className={styles.btn}>ReactJs</button>
          </div>
          <p className={styles.yr}>2023</p>
        </div>
        <div className={styles.page2}>
          <img className={styles.imgr} src={MyDocs} />
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.page1}>
          <p className={styles.project}>Blogging Site </p>
          <div className={styles.lorem}>
            <ol>
              A web-based simple blogging site that can show the tweets of the
              persons with the creative manner
            </ol>
          </div>
          <a
            className={styles.para3}
            href="https://github.com/adietyaprogithub/Blogging-Site/tree/blog"
          >
            GITHUB LINK
          </a>
          <a
            className={styles.para3}
            href="https://guileless-yeot-0d924f.netlify.app/"
          >
            VISIT WEBSITES
          </a>
          <div className={styles.buttons}>
            <button className={styles.btn}>HTML</button>
            <button className={styles.btn}>CSS</button>
            <button className={styles.btn}>Javascript</button>
            <button className={styles.btn}>ReactJs</button>
          </div>
          <p className={styles.yr}>2023</p>
        </div>
        <div className={styles.page2}>
          <img className={styles.imgr} src={MyBlog} />
        </div>
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
