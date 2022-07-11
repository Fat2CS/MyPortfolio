import React from "react";
import "./Services.css";
import Heart from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

const Services = () => {
  return (
    <div className="services">
      {/* côté gauche */}
      <div className="quoi">
        <span> Mes Compétences</span>
        <span> connaissances</span>

        <span>
          Lorem ipsum dolor sit amet. Sit ipsa corporis in dolores eaque eos
          placeat repudiandae et blanditiis quis qui quidem consequatur quo
          laudantium dolores? <br /> At quia optio est galisum sint ut
          exercitationem voluptas aut voluptatem eaque.
        </span>
        <button className="button s-button"> Telechargez mon CV</button>
        <div className="blur s-blur1" style={{ backdround: "#ABF1FF94" }}></div>
      </div>
      {/* côté droit */}
      <div className="cards">
        <card emoji={Heart} heading={"Web"} detail={"Html, Css, React"} />
      </div>
    </div>
  );
};

export default Services;
