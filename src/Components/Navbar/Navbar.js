import React, { useState } from "react";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-regular-svg-icons";

//styles
import "./Navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => {
      return !prev;
    });
  };
  return (
    <div className="navbar-container">
      <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="logo" />
      {open && (
        <div className="nav-links">
          <ul className="nav-group-one">
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Resources</a>
            </li>
          </ul>
          <ul className="nav-group-two">
            <li>
              <a href="/">Login</a>
            </li>
            <li className="sign-up">
              <a href="/">Sign Up</a>
            </li>
          </ul>
        </div>
      )}
      <button className="hamburger" onClick={handleOpen}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}

export default Navbar;
