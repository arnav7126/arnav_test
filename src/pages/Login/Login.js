// Login.js
// import React from "react";
// import "./Login.css";

// const Login = () => {
//   return (
//     <div classname="login-body">
//       <div className="container">
//         <div className="login-rectangle">
//           <div className="circle"></div>
//           <div className="login-description">
//             Your go-to platform to buy, sell, and bid on high-quality used
//             goods.
//           </div>
//           <div className="login-line"></div>
//           <div className="loginText">Login using your account on </div>
//           <div
//             className="googleButton"
//             onClick={() => console.log("Google button clicked")}
//           >
//             Google
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

//Login.js
// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0
// import "./Login.css";
// import { useNavigate } from "react-router-dom";


// const Login = () => {

//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   const redirectToHomePage = () => {
//     // Redirect to the "settings" route
//     navigate("/homepage");
//   };
//   const { loginWithRedirect } = useAuth0(); // Destructure loginWithRedirect from useAuth0

//   const handleLogin = () => {
//     loginWithRedirect(); // Trigger Auth0 login flow when the Google button is clicked
//   };

//   return (
//     <div className="login-body">
//       <div className="container">
//         <div className="login-rectangle">
//           <div className="circle"></div>
//           <div className="login-description">
//             Your go-to platform to buy, sell, and bid on high-quality used goods.
//           </div>
//           <div className="login-line"></div>
//           <div className="loginText">Login using your account on </div>
//           <div className="googleButton" onClick={()=>{handleLogin;
//           redirectToHomePage()}}>
//             Google
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// Login.js



// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import "./Login.css";

// const Login = () => {
//   const { loginWithRedirect } = useAuth0();

//   const handleLogin = () => {
//     loginWithRedirect();
//   };

//   return (
//     <div className="login-body">
//       <div className="container">
//         <div className="login-rectangle">
//           <div className="circle"></div>
//           <div className="login-description">
//             Your go-to platform to buy, sell, and bid on high-quality used goods.
//           </div>
//           <div className="login-line"></div>
//           <div className="loginText">Login using your account on </div>
//           <div className="googleButton" onClick={handleLogin}>
//             Google
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0
// import "./Login.css";

// const Login = () => {
//   const { loginWithRedirect } = useAuth0(); // Destructure loginWithRedirect from useAuth0

//   const handleLogin = () => {
//     loginWithRedirect(); // Trigger Auth0 login flow when the Google button is clicked
//   };

//   return (
//     <div className="login-body">
//       <div className="container">
//         <div className="login-rectangle">
//           <div className="circle"></div>
//           <div className="login-description">
//             Your go-to platform to buy, sell, and bid on high-quality used goods.
//           </div>
//           <div className="login-line"></div>
//           <div className="loginText">Login using your account on </div>
//           <button className="googleButton" onClick={handleLogin}>
//             Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

//Trial 1 (this works but it comes back to login page after login)


// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0
// import "./Login.css";
// import { useNavigate } from "react-router-dom";


// const Login = () => {

//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   const redirectToHomePage = () => {
//     navigate("/homepage");
//   };
//   const { loginWithRedirect } = useAuth0(); // Destructure loginWithRedirect from useAuth0

//   const handleLogin = () => {
//     loginWithRedirect(); // Trigger Auth0 login flow when the Google button is clicked
//   };

//   return (
//     <div className="login-body">
//       <div className="container">
//         <div className="login-rectangle">
//           <div className="circle"></div>
//           <div className="login-description">
//             Your go-to platform to buy, sell, and bid on high-quality used goods.
//           </div>
//           <div className="login-line"></div>
//           <div className="loginText">Login using your account on </div>
//           <div className="googleButton" onClick={()=>{handleLogin();
//           redirectToHomePage()}}>
//             Google
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// trial 2 (test authentication)


// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0
// import "./Login.css";
// import { useNavigate } from "react-router-dom";


// const Login = () => {

//   const{user,  isAuthenticated, logout} = useAuth0();

//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   const redirectToHomePage = () => {
//     navigate("/homepage");
//   };
//   const { loginWithRedirect } = useAuth0(); // Destructure loginWithRedirect from useAuth0

//   const handleLogin = () => {
//     loginWithRedirect(); // Trigger Auth0 login flow when the Google button is clicked
//   };

//   return (
//     <div className="login-body">
//       <div className="container">
//         <div className="login-rectangle">
//           <div className="circle"></div>
//           <div className="login-description">
//             Your go-to platform to buy, sell, and bid on high-quality used goods.
//           </div>
//           <div className="login-line"></div>
//           <div className="loginText">Login using your account on </div>
//           {/* {isAuthenticated && <h3>Hello {user.name}</h3>} */}
//           {isAuthenticated ? (logout):(null)}
//           {/* {isAuthenticated && <h3>Hello {user.name}</h3>} */}
      
//           <button className="googleButton" onClick={()=>{handleLogin();
//           redirectToHomePage()}}>
//             Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

//trial 3: testing use effect

// import React, { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated) {
//       // If the user is authenticated, log them out first
//       logout({ returnTo: window.location.origin });
//     }
//   }, [isAuthenticated, logout]);

//   const handleLogin = () => {
//     loginWithRedirect(); // Initiate the Auth0 login flow after logout
//   };

//   const redirectToHomePage = () => {
//     navigate("/homepage");
//   };

//   return (
//     <div className="login-body">
//       <div className="container">
//         <div className="login-rectangle">
//           <div className="circle"></div>
//           <div className="login-description">
//             Your go-to platform to buy, sell, and bid on high-quality used goods.
//           </div>
//           <div className="login-line"></div>
//           <div className="loginText">Login using your account on </div>
//           {isAuthenticated && <h3>Hello {user.name}</h3>}
//           <button className="googleButton" onClick={() => {
//             handleLogin();
//             redirectToHomePage();
//           }}>
//             Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

//trial 4 trying to fix the issue of coming back to login page


// import React, { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
//   const navigate = useNavigate();

  
//   useEffect(() => {
//     if (isAuthenticated) {
//       // If the user is authenticated, redirect to homepage
//       logout({ returnTo: window.location.origin });
//       navigate("/homepage");
//     }
//   }, [isAuthenticated, navigate]);

//   const handleLogin = () => {
//     loginWithRedirect(); // Initiate the Auth0 login flow
//   };

//   return (
//     <div className="login-body">
//       <div className="container">
//         <div className="login-rectangle">
//           <div className="circle"></div>
//           <div className="login-description">
//             Your go-to platform to buy, sell, and bid on high-quality used goods.
//           </div>
//           <div className="login-line"></div>
//           <div className="loginText">Login using your account on </div>
//           <button className="googleButton" onClick={handleLogin}>
//             Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// trial 5 trying to fix issue of once it starts start with logged out

// import React, { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleLogout = async () => {
//       if (isAuthenticated) {
//         try {
//           // If the user is authenticated, initiate logout
//           await logout({ returnTo: window.location.origin });
//         } catch (error) {
//           console.error("Logout error:", error);
//         }
//       }
//       // After ensuring logout, proceed with redirect to homepage
//       navigate("/homepage");
//     };

//     handleLogout(); // Call the logout function when the component mounts
//   }, [isAuthenticated, logout, navigate]);

//   const handleLogin = () => {
//     loginWithRedirect(); // Initiate the Auth0 login flow
//   };

//   return (
//     <div className="login-body">
//       <div className="container">
//         <div className="login-rectangle">
//           <div className="circle"></div>
//           <div className="login-description">
//             Your go-to platform to buy, sell, and bid on high-quality used goods.
//           </div>
//           <div className="login-line"></div>
//           <div className="loginText">Login using your account on </div>
//           <button className="googleButton" onClick={handleLogin}>
//             Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


//trial 6 fixing all isues

// import React, { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleDefaultLogout = async () => {
//       if (isAuthenticated) {
//         try {
//           // If the user is authenticated, initiate logout
//           await logout({ returnTo: window.location.origin });
//         } catch (error) {
//           console.error("Logout error:", error);
//         }
//       }
//     };

//     handleDefaultLogout(); // Ensure logout when the component mounts
//   }, [isAuthenticated, logout]);

//   const handleLogin = () => {
//     loginWithRedirect(); // Initiate the Auth0 login flow
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       // If the user is authenticated, redirect to the homepage after login
//       navigate("/homepage");
//     }
//   }, [isAuthenticated, navigate]);

//   return (
//     <div className="login-body">
//       <div className="container">
//         <div className="login-rectangle">
//           <div className="circle"></div>
//           <div className="login-description">
//             Your go-to platform to buy, sell, and bid on high-quality used goods.
//           </div>
//           <div className="login-line"></div>
//           <div className="loginText">Login using your account on </div>
//           <button className="googleButton" onClick={handleLogin}>
//             Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

//trial 7

// import React, { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const {user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleDefaultLogout = async () => {
//       if (isAuthenticated) {
//         try {
//           // If the user is authenticated, initiate logout
//           await logout({ returnTo: window.location.origin });
//         } catch (error) {
//           console.error("Logout error:", error);
//         }
//       }
//     };

//     handleDefaultLogout(); // Ensure logout when the component mounts
//   }, [isAuthenticated, logout]);

//   const handleLogin = async () => {
//     try {
//       // Initiate the Auth0 login flow
//       await loginWithRedirect();
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       // If the user is authenticated, redirect to the homepage after login
//       navigate("/homepage");
//     }
//   }, [isAuthenticated, navigate]);

//   return (
//     <div className="login-body">
//       <div className="container">
//         <div className="login-rectangle">
//           <div className="circle"></div>
//           <div className="login-description">
//             Your go-to platform to buy, sell, and bid on high-quality used goods.
//           </div>
//           <div className="login-line"></div>
//           <div className="loginText">Login using your account on </div>
//           {isAuthenticated && <h3>Hello {user.name}</h3>}
//           <button className="googleButton" onClick={handleLogin}>
//             Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

//trial 8


// import React, { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleDefaultLogout = async () => {
//       if (isAuthenticated) {
//         try {
//           await logout({ returnTo: window.location.origin });
//         } catch (error) {
//           console.error("Logout error:", error);
//         }
//       }
//     };

//     handleDefaultLogout();
//   }, [isAuthenticated, logout]);

//   const handleLogin = () => {
//     loginWithRedirect();
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/homepage");
//     }
//   }, [isAuthenticated, navigate]);

//   return (
//     <div className="login-body">
//       <div className="container">
//         <div className="login-rectangle">
//           <div className="circle"></div>
//           <div className="login-description">
//             Your go-to platform to buy, sell, and bid on high-quality used goods.
//           </div>
//           <div className="login-line"></div>
//           <div className="loginText">Login using your account on </div>
//           {isAuthenticated && <h3>Hello {user.name}</h3>}
//           <button className="googleButton" onClick={handleLogin}>
//             Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


//trial 9


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
