import React from "react";
import Logo from "./images/logo.svg";

const First = () => {
  return (
    <>
      <div className="first-section">
        <img src={Logo} alt="" />
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly, <br />
          access your clipboard on all your devices.
        </p>
        <div className="buttons">
          <button
            className="btn1"
            style={{ backgroundColor: "var(--Strong-Cyan)" }}
          >
            Download for iOS
          </button>
          <button
            className="btn2"
            style={{ backgroundColor: "var(--Light-Blue)" }}
          >
            Download for Mac
          </button>
        </div>
      </div>
    </>
  );
};

export default First;
