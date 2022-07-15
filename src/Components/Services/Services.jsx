import React from "react";
import "./Services.css";
import Heart from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import CV from "./Developpeuse Fullstack react.pdf";

import { motion } from "framer-motion";

const Services = () => {
  // transition
  const transition = {
    duration: 1,
    type: "spring"
  };
  return (
    <div className="services">
      {/* côté gauche */}
      <div className="quoi">
        <span> Mes Compétences</span>
        <span> connaissances</span>

        <span>
          Challengée par les possibilités du marketing digital, et suite à ma
          reconversion, apprendre à coder est devenu une évidence !
          <br />
          Si vous voulez en savoir plus sur mon parcours téléchargez mon cv !
        </span>
        {/* telechargemrnt du cv */}
        <a href={CV} download>
          <button className="button s-button"> Telechargez mon CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* côté droit */}
      <div className="cards1">
        <motion.div
          whileInView={{ left: "20rem" }}
          initial={{ left: "14rem" }}
          transiton={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={Heart}
            heading={"Developpeuse Web"}
            detail={"HTML, CSS, JAVASCRIPT,NODEJS, REACT"}
          />
        </motion.div>
        {/* 2nd carte */}

        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-7rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developpeuse Mobile"}
            detail={"REACT NATIVE"}
          />
        </motion.div>

        {/* 3 carte */}

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "16rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"SEA"}
            detail={"Facebook Ads, Google Ads"}
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
