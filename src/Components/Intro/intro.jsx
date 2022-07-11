import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";

import Vector1 from "../../img/pink.png";
import Vector2 from "../../img/Vector2.png";
import thumbup from "../../img/thumbup.png";
import Me from "../../img/portrai.png";
import Crown from "../../img/crown.png";
import glasses from "../../img/glassesimoji.png";

// component
import FloatingDiv from "../FloatingDiv/FloatingDiv";
const Intro = () => {
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
        <img src={glasses} alt="" />
        <div style={{ left: "58%" }}>
          <FloatingDiv image={Crown} txt1="Web et" txt2="Mobile" />
        </div>
        <div style={{ top: "18rem", left: "Orem" }}>
          <FloatingDiv image={thumbup} txt1="Android" txt2="Ios" />
        </div>
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
