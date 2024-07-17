import React from "react";
import "../Navbar/Navbar.css";
import Toggle from "../Toggle/Toggle";
import { useTranslation } from "react-i18next";

import { Link } from "react-scroll";
const Navbar = () => {
  const { t } = useTranslation();
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
                {t("Navbar.home")}
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                {t("Navbar.skills")}
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                {t("Navbar.portfolio")}
              </Link>
            </li>
            {/* on appel les className sinon créer un id */}
            <Link to="contact-form" spy={true} smooth={true}>
              <button className="button n-button">
                {t("Navbar.contact_button")}
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
