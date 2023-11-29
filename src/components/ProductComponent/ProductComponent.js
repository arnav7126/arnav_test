import React from "react";
import "./ProductComponent.css"; // Make sure to import the CSS file

function App() {
  return (
    <div className="container">
      <div className="greyRectangle">
        <div className="leftColumn">
          {/* Left Column - Square Picture */}
          <div className="squarePicture"></div>
        </div>
        <div className="rightColumn">
          {/* Right Column - Two Horizontal Parts with Text */}
          <div className="textContainer  whiteText">
            <p className="text">
              sjdfsdofsdnfsdfkjsdbfk 222222222 222222222222 2222222222222222
            </p>
          </div>
          <div className="textContainer">
            <p className="whiteText">Text 2</p>
          </div>
          <div className="textContainer">
            <p className="whiteText">Text 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
