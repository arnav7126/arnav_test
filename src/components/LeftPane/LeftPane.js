import React, { useState } from "react";
import "./LeftPane.css";
import profilePic from "../../assets/profile_pic.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Settings = () => {
  const [activePage, setActivePage] = useState(null);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const {logout} = useAuth0();

  const redirectToSettings = () => {
    // Redirect to the "settings" route
    navigate("/settings");
  };

  const redirectToFunds = () => {
    // Redirect to the "settings" route
    navigate("/funds");
  };

  const redirectToLogin = () => {
    // Redirect to the "settings" route
    navigate("/login");
  };

  const redirectToOrdersPage = () => {
    // Redirect to the "settings" route
    navigate("/orderspage");
  };

  const handlePageClick = (page) => {
    logout({returnTo: window.location.origin});
    setActivePage(page);
    // Add logic to handle navigation or page-specific actions
  };
  return (
    <div classname="leftpane-body">
      <div className="leftPane">
        <div className="setting">
          <h1>Settings</h1>
        </div>
        <div className="line1"></div>
        <div
          className={`left-profileBox ${
            activePage === "profile" ? "selected" : ""
          }`}
          onClick={() => {
            handlePageClick("profile");
            redirectToSettings();
          }}
        >
          <div className="profileContent">
            <div className="profilePicture">
              <img src={profilePic} className="profilePicture" />
            </div>
            <div className="profileInfo">
              <div>
                <h3>Name</h3>
              </div>
              <div>Student ID</div>
            </div>
          </div>
        </div>
        <div className="lineBox">
          <div
            className={`left-info-section ${
              activePage === "orders" ? "selected" : ""
            }`}
            onClick={() => {
              handlePageClick("orders");
              redirectToOrdersPage();
            }}
          >
            <p>My cart</p>
          </div>
          <div className="left-infoboxline"></div>
          <div
            className={`left-info-section ${
              activePage === "soldItems" ? "selected" : ""
            }`}
            onClick={() => handlePageClick("soldItems")}
          >
            <div className="words">Sold items</div>
          </div>
        </div>

        <div className="smallBox">
          <div
            className={`left-info-section ${
              activePage === "bids" ? "selected" : ""
            }`}
            onClick={() => handlePageClick("bids")}
          >
            <p>Current bids</p>
          </div>
          <div className="left-infoboxline"></div>
          <div
            className={`left-info-section ${
              activePage === "selling" ? "selected" : ""
            }`}
            onClick={() => handlePageClick("selling")}
          >
            <p>Selling</p>
          </div>
          <div className="left-infoboxline"></div>
          <div
            className={`left-info-section ${
              activePage === "wishList" ? "selected" : ""
            }`}
            onClick={() => handlePageClick("wishList")}
          >
            <p>Wish list</p>
          </div>
          <div className="left-infoboxline"></div>
          <div
            className={`left-info-section ${
              activePage === "wallet" ? "selected" : ""
            }`}
            onClick={() => {
              handlePageClick("wallet");
              redirectToFunds();
            }}
          >
            <p>Wallet</p>
          </div>
          <div className="left-infoboxline"></div>
          <div
            className={`left-info-section ${
              activePage === "logout" ? "selected" : ""
            }`}
            onClick={() => {
              handlePageClick("logout");
              redirectToLogin();
            }}
          >
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
