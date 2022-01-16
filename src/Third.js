import React from "react";
import Devices from "./images/image-devices.png";

const Third = () => {
  return (
    <>
      <div className="third-section">
        <div className="third-text">
          <h2>Access Clipboard Anywhere </h2>
          <p>
            Whether you're on the go, or at your computer, you can access all
            your Clipboared <br /> snippets in a few simple clicks.
          </p>
        </div>
        <div className="third-image">
          <img src={Devices} alt="" />
        </div>
      </div>
    </>
  );
};

export default Third;
