import Navbar from "./Components/Navbar/Navbar";
import "../src/App.css";
import Intro from "./Components/Intro/intro.jsx";
import Services from "./Components/Services/Services.jsx";
import Motivation from "./Components/Motivation/Motivation";
import Technologies from "./Components/Technologies/Technologies";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/Footer";
import IntelA from "./Components/IntelA/IntelA";
import { themeContext } from "./Context";
import { useContext } from "react";
import Layout from "./Components/Layout/Layout";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : ""
      }}
    >
      <Layout>
        <Navbar />
        <Intro />
        <Services />
        <Motivation />
        <Technologies />
        <IntelA />
        <Portfolio />
        <Contact />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
