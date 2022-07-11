import React from "react";
import "../Navbar/Navbar.css";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="nleft">
        <div className="n-name"> Fatou</div>
        <span> toggle</span>
      </div>
      <div className="nright">
        <div className="nlist">
          <ul style={{ listStyleType: "none" }}>
            <li>Acceuil</li>
            <li> Services</li>
            <li> Portfolio</li>

            <button className="button n-button">Me Contacter</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
