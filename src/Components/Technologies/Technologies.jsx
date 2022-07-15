import React from "react";
import "./Technologies.css";

import HTML from "../../img/html.png";
import Java from "../../img/javascript.png";
import Css from "../../img/css.png";
import reac from "../../img/react.png";
import Mongodb from "../../img/mongodb.png";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="techno">
      <div className="quoi">
        <span> Technologies</span>
        <span> et Outils </span>

        <span>
          Voici les technologies étudiées lors de ma formation.
          {/* <br />
          J
          <br />
          aut voluptatem placeat eaque.
          <br />
          optio est galisum sint ut exercitationem voluptas */}
        </span>
        {/* telechargemrnt du cv */}

        <button className="button s-button"> Engagez-moi</button>

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
