// Settings.js
import React, { useState } from "react";
import "./Settings.css";
import RightPane from "./Pane";
import LeftPane from "./LeftPane";
import profilePic from "./assets/profile_pic.jpg";
import RightPane from "../../components/RightPane/Pane";
import LeftPane from "../../components/LeftPane/LeftPane";
//import profilePic from "./assets/profile_pic.jpg";

const Settings = () => {
  return (
    <div className="settingscontainer">
      <LeftPane />
      <RightPane />
    </div>
  );
};

export default Settings;
