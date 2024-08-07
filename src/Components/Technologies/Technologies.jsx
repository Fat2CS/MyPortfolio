import React, { useContext } from "react";
// import { Link } from "react-scroll";
import "./Technologies.css";
import { themeContext } from "../../Context";

import HTML from "../../img/html.png";
import Java from "../../img/javascript.png";
import Css from "../../img/css.png";
import reac from "../../img/react.png";
import Mongodb from "../../img/mongodb.png";
import Nextjs from "../../img/next.js.png";
import Php from "../../img/php.png";
import ts from "../../img/tss.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Technologies = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const { t } = useTranslation();
  return (
    <div className="techno">
      <div className="quoi">
        <span style={{ color: darkMode ? "white" : "" }}>
          {t("Technologies.title")}
        </span>
        <span> {t("Technologies.tools")}</span>

        <span>{t("Technologies.description")}</span>

        <a
          href="https://github.com/Fat2CS"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <button className="button s-button"> Github </button>{" "}
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* droite */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-maincercle"
        >
          <div className="w-secCercle">
            <img src={HTML} alt="" />
          </div>
          <div className="w-secCercle">
            <img src={Java} alt="" />
          </div>
          <div className="w-secCercle">
            <img src={Css} alt="" />
          </div>
          <div className="w-secCercle">
            <img src={reac} alt="" />
          </div>
          <div className="w-secCercle">
            <img src={Mongodb} alt="" />
          </div>
          <div className="w-secCercle">
            <img src={Php} alt="" />
          </div>
          <div className="w-secCercle">
            <img src={ts} alt="" />
          </div>
          <div className="w-secCercle">
            <img src={Nextjs} alt="" />
          </div>
        </motion.div>
        <div className="w-backCercle orangeCircle"></div>
        <div className="w-backCercle blueCircle"></div>
      </div>
    </div>
  );
};

export default Technologies;
