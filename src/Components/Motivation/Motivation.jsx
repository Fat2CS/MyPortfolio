import React, { useContext } from "react";
import "./Motivation.css";
import { useTranslation } from "react-i18next";
import { themeContext } from "../../Context";

const Motivation = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const { t } = useTranslation();
  return (
    <div className="motivation">
      <div className="motivé">
        <div
          className="disponibilité"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          100%
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>{t('Motivation.availability')}</span>
        <span> {t('Motivation.backend')} </span>
      </div>

      <div className="motivé">
        <div
          className="disponibilité"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          100%
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>{t('Motivation.availability')}</span>
        <span> {t('Motivation.frontend')} </span>
      </div>

      <div className="motivé">
        <div
          className="disponibilité"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          100%
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>{t('Motivation.availability')}</span>
        <span>{t('Motivation.app')}</span>
      </div>
    </div>
  );
};

export default Motivation;
