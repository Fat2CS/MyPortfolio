import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button
        className="language-button english-flag"
        onClick={() => changeLanguage("en")}
      ></button>
      <button
        className="language-button french-flag"
        onClick={() => changeLanguage("fr")}
      ></button>
    </div>
  );
};

export default LanguageSelector;
