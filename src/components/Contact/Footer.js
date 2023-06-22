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
          Handcrafted by me © Devendra Parsharam.
        </p>
        <p className={styles.footer_para}>Inspired by © xyz.</p>
      </div>
      <div className={styles.footer_icons}>
        <a
          href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569888%7Cb%7Cfacebook%20signin%7C&placement=&creative=589460569888&keyword=facebook%20signin&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221832%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-3821998899%26loc_physical_ms%3D1007785%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwv8qkBhAnEiwAkY-ahh6nIz9_L_ZnpgM-wYRp_9RYuUAoMZgaYrHi7BCyfIq0aS3wfpUohhoCypkQAvD_BwE"
          target="_blank"
        >
          <FacebookIcon className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/devaparsharam_491/" target="_blank">
          <InstagramIcon className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/devendra-parsharam-1ba784241/"
          target="_blank"
        >
          <LinkedInIcon className={styles.icon} />
        </a>
        <a href="https://github.com/Deva127-dot/react-practice" target="_blank">
          <GitHubIcon className={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
