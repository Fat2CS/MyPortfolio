import React, { useContext } from "react";
import "./Motivation.css";

import { themeContext } from "../../Context";

const Motivation = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="motivation">
      <div className="motivé">
        <div
          className="disponibilité"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          100%
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>motivation</span>
        <span> Backend </span>
      </div>

      <div className="motivé">
        <div
          className="disponibilité"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          100%
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>créativité</span>
        <span> Frontend </span>
      </div>

      <div className="motivé">
        <div
          className="disponibilité"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          100%
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>passionnée</span>
        <span>App</span>
      </div>
    </div>
  );
};

export default Motivation;
