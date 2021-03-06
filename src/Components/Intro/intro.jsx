import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";

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
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span> Hello, je suis </span>
          <span>Fatou Coulibaly-Seiller</span>
          <span>
            Developpeuse Fullstack, en formation et à la recherche d'un stage
          </span>
        </div>
        <button className="button i-button"> Engagez-moi</button>
        <div className="i_icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
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
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transiton={transition}
          style={{ left: "58%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web et" txt2="Mobile" />
        </motion.div>
        <motion.div
          initial={{ top: "9rem", left: "18rem" }}
          whileInView={{ left: "0rem" }}
          transiton={transition}
          style={{ top: "18rem", left: "Orem" }}
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
