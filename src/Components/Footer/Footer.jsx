import React from "react";

import "./Footer.css";
import Wave from "../../img/wave.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>coulibalyfatoumata@hotmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.facebook.com/fatou.seiller.3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook color="white" size={"3rem"} />
          </a>

          <a
            href="https://github.com/Fat2CS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
