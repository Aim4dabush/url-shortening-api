import React, { useState } from "react";

//components
import Advertise from "./Components/Advertise/Advertise";
import Boost from "./Components/Boost/Boost";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import LinkMods from "./Components/LinkMods/LinkMods";
import MainFeature from "./Components/MainFeature/MainFeature";
import Navbar from "./Components/Navbar/Navbar";

//styles
import "./App.scss";

export const URL = React.createContext({});

function App() {
  const [webLink, setWebLink] = useState("");
  const [linkArray, setLinkArray] = useState([]);

  return (
    <URL.Provider
      value={{
        linkArray: linkArray,
        setLinkArray: setLinkArray,
        setWebLink: setWebLink,
        webLink: webLink,
      }}
    >
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
        {linkArray.length > 0 && <LinkMods />}
        <Advertise />
        <Boost />
        <Footer />
      </div>
    </URL.Provider>
  );
}

export default App;
