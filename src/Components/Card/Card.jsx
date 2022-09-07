import React from "react";
import Link from "react-scroll/modules/components/Link";
import "./Card.css";
const Card = ({ emoji, heading, detail }) => {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <Link to="portfolio">
        <button className="c-button">En savoir plus </button>
      </Link>
    </div>
  );
};

export default Card;
