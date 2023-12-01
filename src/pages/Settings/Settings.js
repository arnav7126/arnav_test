// Settings.js
import React, { useState } from "react";
import "./Settings.css";
import RightPane from "../../components/RightPane/Pane";
import LeftPane from "../../components/LeftPane/LeftPane";
//import profilePic from "./assets/profile_pic.jpg";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Button, Form, FormControl } from "react-bootstrap";

const Settings = () => {
  return (
    <div className="settings-body">
      <NavigationBar />
      <div className="settingscontainer">
        <LeftPane />
        <RightPane />
      </div>
    </div>
  );
};

export default Settings;
