import React from "react";
import Logo from "./images/logo.svg";
import Twitter from "./images/icon-twitter.svg";
import Instagram from "./images/icon-instagram.svg";
import Facebook from "./images/icon-facebook.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="list">
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Install Guide</a> <br />
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Press Kit</a>
          </li>
        </div>
        <div className="social-media">
          <img src={Twitter} alt="" />
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
