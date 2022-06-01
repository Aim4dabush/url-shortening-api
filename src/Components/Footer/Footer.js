import React from "react";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

//styles
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-image-container">
        <img
          className="footer-image"
          src={process.env.PUBLIC_URL + "/images/logo.svg"}
          alt="logo"
        />
      </div>
      <div className="footer-links">
        <div className="features">
          <h3 className="footer-title">Features</h3>
          <ul className="links">
            <li className="link">
              <a href="/">Link Shopping</a>
            </li>
            <li className="link">
              <a href="/">Branded Links</a>
            </li>
            <li className="link">
              <a href="/">Analytics</a>
            </li>
          </ul>
        </div>
        <div className="resources">
          <h3 className="footer-title">Resources</h3>
          <ul className="links">
            <li className="link">
              <a href="/">Blog</a>
            </li>
            <li className="link">
              <a href="/">Developers</a>
            </li>
            <li className="link">
              <a href="/">Support</a>
            </li>
          </ul>
        </div>
        <div className="company">
          <h3 className="footer-title">Company</h3>
          <ul className="links">
            <li className="link">
              <a href="/">About</a>
            </li>
            <li className="link">
              <a href="/">Our Team</a>
            </li>
            <li className="link">
              <a href="/">Careers</a>
            </li>
            <li className="link">
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-media">
        <a className="media-link" href="/">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a className="media-link" href="/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className="media-link" href="/">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <a className="media-link" href="/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
