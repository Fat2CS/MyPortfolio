import Navbar from "./Components/Navbar/Navbar";
import "../src/App.css";
import Intro from "./Components/Intro/intro.jsx";
import Services from "./Components/Services/Services.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
    </div>
  );
}

export default App;
