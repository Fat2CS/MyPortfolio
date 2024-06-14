/* eslint-disable react/style-prop-object */
import React, { useContext } from "react";
import { Link } from "react-scroll";
import "./IntelA.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";

import Vector1 from "../../img/pink.png";
import Vector2 from "../../img/Vector2.png";
import VOICEFLOW from "../../img/VOICEFLOW.png";
import ZAPPIER from "../../img/zapier.png";
import MAKE from "../../img/MAKE.png";
import OPENAI from "../../img/OPENAI.png";

import Crown from "../../img/crown.png";
import glasses from "../../img/glassesimoji.png";

import { motion } from "framer-motion";

// component
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const DotLottiePlayer = () => (
  <dotlottie-player
    src="https://lottie.host/2bd6eb58-941a-4b33-8676-a1b8dfcad393/nmNAb0tMHs.json"
    background="transparent"
    speed="1"
    style={{ width: "400px", height: "400px" }}
    loop
    autoplay
  ></dotlottie-player>
);

const IntelA = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="techno">
      <div className="i-left">
        <div className="i-space">
          <div className="i-name">
            <span style={{ color: darkMode ? "white" : "" }}>
              Intelligence Artificielle et
            </span>
            <span className="auto">Automatisation</span>

            <span>
              <div className="ia">
                <p>
                  Je suis fascinée par l'automatisation des tâches, ce qui me
                  permet d'optimiser les processus et d'améliorer l'efficacité
                  des projets.
                </p>
                <p>
                  De plus, mon expertise en intelligence artificielle me permet
                  de créer des solutions avancées pour des applications plus
                  intelligentes et interactives.
                </p>
              </div>
            </span>
          </div>{" "}
        </div>

        <Link to="contact-form">
          <button className="button i-button"> Contactez-moi</button>
        </Link>
      </div>
      <div className="i-rights">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <DotLottiePlayer />
        {/* <img
          src="https://lottie.host/2bd6eb58-941a-4b33-8676-a1b8dfcad393/nmNAb0tMHs.json"
          alt="anim"
        /> */}
        {/* <img src={Me} alt="" /> */}

        {/* <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transiton={transition}
          src={Me}
          alt=""
        /> */}
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transiton={transition}
          style={{ left: "58%" }}
          className="floating-div2"
        >
          {/* <FloatingDiv image={OPENAI} txt1="Web et" txt2="Mobile" /> */}
        </motion.div>
        <motion.div
          initial={{ top: "9rem", left: "10rem" }}
          whileInView={{ left: "0rem" }}
          transiton={transition}
          style={{ top: "18rem", left: "8rem" }}
          className="floating-div1"
        >
          <FloatingDiv
            image={ZAPPIER}
            // txt1="Android"
            // txt2="Ios"
            className="floating-div2"
          />
        </motion.div>
        <motion.div
          initial={{ top: "7rem", left: "15rem" }}
          whileInView={{ left: "20rem" }}
          transiton={transition}
          style={{ top: "8rem", left: "12rem" }}
          className="floating-div1"
        >
          <FloatingDiv
            image={MAKE}
            // txt1="And"
            // txt2="Ios"
            className="floating-div1"
          />
        </motion.div>

        <motion.div
          initial={{ top: "2rem", left: "15rem" }}
          whileInView={{ left: "5rem" }}
          transiton={transition}
          style={{ top: "8rem", left: "12rem" }}
          className="floating-div1"
        >
          <FloatingDiv
            image={OPENAI}
            // txt1="IA"
            // txt2="Intégration"
            className="floating-div3"
          />
        </motion.div>

        <motion.div
          initial={{ top: "15rem", left: "15rem" }}
          whileInView={{ left: "5rem" }}
          transiton={transition}
          style={{ top: "8rem", left: "12rem" }}
          className="floating-div1"
        >
          <FloatingDiv
            image={VOICEFLOW}
            // txt1="ChatBot"
            // txt2="e-commerce"
            className="floating-div3"
          />
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
export default IntelA;
