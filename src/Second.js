import React from "react";
import Monitor from "./images/image-computer.png";

const Second = () => {
  return (
    <>
      <div className="second-section">
        <div className="first-part">
          <h2>Keep track of your snippets </h2>
          <p>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access <br /> your snippets immediately on all your devices.
            Our Mac and iOS apps will help you <br /> organize everything.
          </p>
        </div>
        <div className="second-part">
          <div className="image">
            <img src={Monitor} alt="" />
          </div>
          <div className="texts">
            <div className="items">
              <h3>Quick Search</h3>
              <p>
                Easily search your snippets by content, <br />
                category, web address , application, and more
              </p>
            </div>
            <div className="items">
              <h3>iCloud Sync</h3>
              <p>
                Instanly saves and syncs snippets across <br /> all your
                devices.
              </p>
            </div>
            <div className="items">
              <h3>Complete History</h3>
              <p>
                Retrieve any snippets from the first moment <br /> you started
                using the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
