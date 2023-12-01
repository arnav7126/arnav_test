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

const localStorageUser =
  JSON.parse(localStorage.getItem("localStorageUserData")) || {};

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

        const data = JSON.stringify({
          //send to backend  // THIS SHOULD SEND A POST REQUEST TO THE BACKEND
          username: user.name,
          email: user.email,
          profileImageUrl: user.picture,
        });

        console.log(data);
        axios
          .post("http://localhost:8080/users", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            // to handle success response and retrieve the returned data
            console.log(response);
            if (response.status === 201) {
              const createdUser = response.data; // Access the created user object
              console.log("Created User:", createdUser);
              localStorageUser.userId = createdUser.userId;
              localStorageUser.profileImageUrl = createdUser.profileImageUrl;
              localStorageUser.username = createdUser.username;
              localStorageUser.email = createdUser.email;
              localStorage.setItem(
                "localStorageUserData",
                JSON.stringify(localStorageUser)
              );
              console.log("Local Storage User:", localStorageUser);
            } else {
              console.error("Unexpected Status:", response.status);
            }
          })
          .catch((error) => {
            console.log(error);
            alert("error in posting user");
          });

        // axios.post("http://localhost:8080/users",localStorageUser).then
        navigate("/homepage");
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
