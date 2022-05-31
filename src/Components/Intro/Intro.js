import React from "react";

//styles
import "./Intro.scss";

function Intro() {
  return (
    <div className="intro-container">
      <h2 className="intro-title">More than just shorter links</h2>
      <p className="intro-content">
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <button className="intro-button">Get Started</button>
    </div>
  );
}

export default Intro;
