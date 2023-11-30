import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0
import { useNavigate } from "react-router-dom";
import "./ProfilePopup.css";
import profileicon from "../../assets/profileicon.jpeg";
import buy from "../../assets/buy.png";
import logout1 from "../../assets/logout1.png";
import sell5 from "../../assets/sell5.png";

function ProfilePopup({ userEmail }) {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth0(); // Destructure logout from useAuth0

  const handleLogout = () => {
    // Call the logout method from useAuth0
    logout({ returnTo: window.location.origin });
  };

  const redirectToSettings = () => {
    navigate("/settings");
  };

  const redirectToHomePage = () => {
    navigate("/");
  };

  const redirectToAddProduct = () => {
    navigate("/addproduct");
  };

  const redirectToLogin = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <>
      <img
        src={profileicon}
        alt="Profile"
        className="profile-icon"
        onClick={() => setIsVisible(!isVisible)}
      />

      {isVisible && (
        <div className="popup">
          <img src={profileicon} alt="Profile Pic" className="profile-pic" />
          <button className="profile-button" onClick={redirectToSettings}>
            Profile
          </button>
          <div className="options">
            <button className="option" onClick={redirectToHomePage}>
              <img src={buy} alt="Buy" className="option-icon" />
              <span>Buy</span>
            </button>
            <button className="option" onClick={redirectToAddProduct}>
              <img src={sell5} alt="Sell" className="option-icon" />
              <span>Sell</span>
            </button>
            <div className="option" onClick={redirectToLogin}>
              <img src={logout1} alt="Logout" className="option-icon" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfilePopup;
