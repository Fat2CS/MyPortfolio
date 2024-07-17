import React, { useContext } from "react";
import "./Services.css";
import Heart from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import CV from "./CV devop.pdf";
import CV2 from "./cvus.pdf";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring"
  };
  const { t } = useTranslation();
  return (
    <div className="services">
      {/* côté gauche */}
      <div className="quoi">
        <span style={{ color: darkMode ? "white" : "" }}>
          {" "}
          {t("Services.skills")}
        </span>
        <span className="connais"> {t("Services.knowledge")}</span>

        <span>
          {t("Services.description")}
          {/* Challengée par les possibilités du marketing digital, et suite à ma
          reconversion, apprendre à coder est devenu une évidence ! */}
          <br />
          {t("Services.more_info")}
        </span>
        {/* telechargement du cv */}

        <div className="button_cv">
          <a href={CV} download>
            <button className="button s-button">
              {" "}
              {t("Services.download_cv")}
            </button>
          </a>
          <a href={CV2} download>
            <button className="button s-button">
              {" "}
              {t("Services.download_cvus")}
            </button>
          </a>
        </div>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* côté droit */}
      <div className="cards1">
        <motion.div
          whileInView={{ left: "10rem" }}
          initial={{ left: "14rem" }}
          transiton={transition}
          style={{ top: "8rem", left: "20rem" }}
        >
          <Card
            emoji={Heart}
            heading={t("Services.web_dev")}
            detail={t("Services.web_dev_details")}
          />
        </motion.div>
        {/* 2nd carte */}

        <motion.div
          initial={{ left: "12rem", top: "15rem" }}
          whileInView={{ left: "-6rem" }}
          transition={transition}
          style={{ top: "16rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={t("Services.mobile_dev")}
            detail={t("Services.mobile_dev_details")}
          />
        </motion.div>

        {/* 3 carte */}

        <motion.div
          initial={{ top: "34rem", left: "15rem" }}
          whileInView={{ left: "9rem" }}
          transition={transition}
          style={{ top: "25rem", left: "1rem" }}
        >
          <Card
            emoji={Humble}
            heading={t("Services.sea")}
            detail={t("Services.sea_details")}
          />
        </motion.div>
      </div>
      <div
        className="blur s-blur2"
        style={{ background: "var(--purple)" }}
      ></div>
    </div>
  );
};

export default Services;
