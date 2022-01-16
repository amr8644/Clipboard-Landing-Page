import React from "react";
import BlackList from "./images/icon-blacklist.svg";
import Text from "./images/icon-text.svg";
import Preview from "./images/icon-preview.svg";

import Google from "./images/logo-google.png";
import IBM from "./images/logo-ibm.png";
import Microsoft from "./images/logo-microsoft.png";
import HP from "./images/logo-hp.png";
import Vector from "./images/logo-vector-graphics.png";

const Fourth = () => {
  return (
    <>
      <div>
        <div className="fourth-section">
          <div className="fourth-title">
            <h2>Supercharge your workflow </h2>
            <p>We've got the tools to boost your productively.</p>
          </div>
          <div className="fourth-text">
            <div className="items2">
              <img src={BlackList} alt="" />
              <h3>Create blacklists</h3>
              <p>
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>
            <div className="items2">
              <img src={Text} alt="" />
              <h3>Plain text snippets</h3>
              <p>
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            <div className="items2">
              <img src={Preview} alt="" />
              <h3>Sneak preview </h3>
              <p>
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
        <div className="images">
          <img src={Google} alt="" />
          <img src={IBM} alt="" />
          <img src={Microsoft} alt="" />
          <img src={HP} alt="" />
          <img src={Vector} alt="" />
        </div>
        <div className="download">
          <h2>Clipboard for iOS and Mac OS</h2>
          <p>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and <br /> you're ready to start adding to your
            clipboard
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
      </div>
    </>
  );
};

export default Fourth;
