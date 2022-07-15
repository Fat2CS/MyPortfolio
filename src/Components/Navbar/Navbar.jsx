import React from "react";
import "../Navbar/Navbar.css";
import Toggle from "../Toggle/Toggle";

import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="nleft">
        <div className="n-name"> Fatou</div>
        <Toggle />
      </div>
      <div className="nright">
        <div className="nlist">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Acceuil
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            {/* on appel les className sinon créer un id */}
            <Link to="contact-form" spy={true} smooth={true}>
              <button className="button n-button">Me Contacter</button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
