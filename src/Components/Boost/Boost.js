import React from "react";

//styles
import "./Boost.scss";

function Boost() {
  return (
    <div className="boost-container">
      <img
        alt="mobile boost"
        className="boost-img"
        src={process.env.PUBLIC_URL + "/images/mobile/bg-boost-mobile.svg"}
      />
      <h2 className="boost-title">Boost your links today</h2>
      <button className="boost-button">Get Started</button>
    </div>
  );
}

export default Boost;
