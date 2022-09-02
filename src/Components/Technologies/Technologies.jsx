import React, { useContext } from "react";
// import { Link } from "react-scroll";
import "./Technologies.css";
import { themeContext } from "../../Context";

import HTML from "../../img/html.png";
import Java from "../../img/javascript.png";
import Css from "../../img/css.png";
import reac from "../../img/react.png";
import Mongodb from "../../img/mongodb.png";
import { motion } from "framer-motion";

const Technologies = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="techno">
      <div className="quoi">
        <span style={{ color: darkMode ? "white" : "" }}> Technologies</span>
        <span> et Outils </span>

        <span>Voici les technologies étudiées lors de ma formation.</span>

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
        </motion.div>
        <div className="w-backCercle orangeCircle"></div>
        <div className="w-backCercle blueCircle"></div>
      </div>
    </div>
  );
};

export default Technologies;
