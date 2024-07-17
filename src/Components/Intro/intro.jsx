import React, { useContext } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";

import Vector1 from "../../img/pink.png";
import Vector2 from "../../img/Vector2.png";
import thumbup from "../../img/thumbup.png";
import Me from "../../img/portraito.png";
import Crown from "../../img/crown.png";
import glasses from "../../img/glassesimoji.png";

import { motion } from "framer-motion";

// component
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };
  const { t } = useTranslation();
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>
            {t("intro.hello")}
          </span>
          <span>{t("intro.name")}</span>
          <span>{t("intro.description")}</span>
        </div>
        <Link to="contact-form">
          <button className="button i-button">
            {t("intro.contact_button")}
          </button>
        </Link>

        <div className="i_icons">
          <a
            href="https://github.com/Fat2CS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/fatouseiller/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Me} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transiton={transition}
          src={glasses}
          alt=""
        />
        <motion.div
          initial={{ top: "-8%", left: "74%" }}
          whileInView={{ left: "28%" }}
          transiton={transition}
          style={{ left: "58%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web et" txt2="Mobile" />
        </motion.div>
        <motion.div
          initial={{ top: "9rem", left: "15rem" }}
          whileInView={{ left: "-10rem" }}
          transiton={transition}
          style={{ top: "18rem", left: "10rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Android" txt2="Ios" />
        </motion.div>
        {/* fond côté droite */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem"
          }}
        ></div>
      </div>
    </div>
  );
};
export default Intro;
