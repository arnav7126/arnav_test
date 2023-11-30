import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/homepage");
    }
  }, [isLoading, isAuthenticated, navigate]);

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div className="login-body">
      <div className="container">
        <div className="login-rectangle">
          <div className="circle"></div>
          <div className="login-description">
            Your go-to platform to buy, sell, and bid on high-quality used goods.
          </div>
          <div className="login-line"></div>
          <div className="loginText">Login using your account on </div>
          <button className="googleButton" onClick={handleLogin}>
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
