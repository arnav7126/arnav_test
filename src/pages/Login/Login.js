// import React, { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isLoading && isAuthenticated) {
//       navigate("/homepage");
//     }
//   }, [isLoading, isAuthenticated, navigate]);

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
//           <button className="googleButton" onClick={handleLogin}>
//             Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// //trial 1

// import React, { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Login.css";

// const Login = () => {
//  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();
//  const navigate = useNavigate();

//  useEffect(() => {
//     if (!isLoading && isAuthenticated) {
//       console.log("User Information: ", user);
//       axios
//         .post("/api/users", {
//           name: user.name,
//           email: user.email,
//           picture: user.picture,
//         })
//         .then((response) => {
//           navigate("/homepage");
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//  }, [isLoading, isAuthenticated, navigate, user]);

//  const handleLogin = () => {
//     loginWithRedirect();
//  };

//  return (
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
//  );
// };

// export default Login;

//trial 2

// import React, { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Login.css";

// const Login = () => {
//  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();
//  const navigate = useNavigate();

//  useEffect(() => {
//     if (!isLoading && isAuthenticated) {
//         console.log("User Information: ", user.name, user.email, user.picture);

//         navigate("/homepage");
//         axios
//             .post("/api/user", {        //send to backend
//             name: user.name,
//             email: user.email,
//             picture: user.picture,
//             })
//             .catch((error) => {
//             console.log(error);
//             });

//     }
//  }, [isLoading, isAuthenticated, navigate, user]);

//  const handleLogin = () => {
//     loginWithRedirect();
//  };

//  return (
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
//  );
// };

// export default Login;

//trial 3

import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      if (
        user.email.startsWith("f") ||
        user.email.endsWith("@hyderabad.bits-pilani.in")
      ) {
        console.log("User Information: ", user.name, user.email, user.picture);

        navigate("/homepage");
        axios
          .post("/api/user", {
            //send to backend
            name: user.name,
            email: user.email,
            picture: user.picture,
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert("invalid user");
        // Log out the user if email doesn't meet the criteria
        // You can customize this behavior as per your requirement
        // For demonstration, logging out the user
        // Replace 'logout()' with your logout functionality
        // from the Auth0 library
        //logout();
      }
    }
  }, [isLoading, isAuthenticated, navigate, user]);

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div className="login-body">
      <div className="container">
        <div className="login-rectangle">
          <div className="circle"></div>
          <div className="login-description">
            Your go-to platform to buy, sell, and bid on high-quality used
            goods.
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
