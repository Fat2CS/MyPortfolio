import React from "react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
// import './Layout.css'; // Ajoutez des styles si nécessaire

const Layout = ({ children }) => {
  return (
    <div>
      <LanguageSelector />
      {children}
    </div>
  );
};

export default Layout;
