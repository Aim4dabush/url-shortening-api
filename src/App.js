//components
import Intro from "./Components/Intro/Intro";
import MainFeature from "./Components/MainFeature/MainFeature";
import Navbar from "./Components/Navbar/Navbar";

//styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="img-container">
        <img
          alt="opening img"
          className="opening-img"
          src={process.env.PUBLIC_URL + "/images/illustration-working.svg"}
        />
      </div>
      <Intro />
      <MainFeature />
    </div>
  );
}

export default App;
