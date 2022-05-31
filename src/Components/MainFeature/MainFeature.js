import React from "react";

//styles
import "./MainFeature.scss";

function MainFeature() {
  return (
    <div className="main-feature-container">
      <img
        alt="short"
        className="short"
        src={process.env.PUBLIC_URL + "/images/mobile/bg-shorten-mobile.svg"}
      />
      <input
        className="url-input"
        placeholder="Shorten a link here..."
        type="text"
      />
      <button className="url-button" type="button">
        Shorten It!
      </button>
    </div>
  );
}

export default MainFeature;
