// import React from "react";
// import "./NavigationBar.css"; // Import the CSS file for styling
// import menuicon1 from "../../assets/menuicon1.jpg";
// import carticon from "../../assets/carticon.png";
// import profileicon from "../../assets/profileicon.jpeg";
// import searchicon from "../../assets/searchicon.png";
// import logo from "../../assets/logo.jpeg";
// import buy from "../../assets/buy.png";
// import logout1 from "../../assets/logout1.png";
// import sell5 from "../../assets/sell5.png";
// // import searchicon2 from "../../assets/searchicon2.png";
// import { Button, Form, FormControl } from "react-bootstrap";
// import { useState } from "react";
// import ProfilePopup from "../ProfilePopup/ProfilePopup";
// import { useNavigate } from "react-router-dom";

// function NavigationBar({ userEmail }) {
//   const navigate = useNavigate();

//   const redirectToHomePage = () => {
//     // Redirect to the "settings" route
//     navigate("/");
//   };

//   const redirectToOrdersPage = () => {
//     navigate("/orderspage");
//   };

//   const redirectToProductList = () => {
//     navigate("/productlist");
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-left">
//         {/* <img src={menuicon1} alt="Menu" className="icon" /> */}
//         <img
//           src={logo}
//           alt="Logo"
//           className="Licon"
//           onClick={redirectToHomePage}
//         />
//       </div>
//       <div className="navbar-right" style={{ width: "30%" }}>
//         <Form className="search-bar">
//           <FormControl
//             type="search"
//             placeholder="Search..."
//             aria-label="Search"
//           />
//           {/* {
//             <Button variant="outline-success">
//               <img src={searchicon2} alt="Search" className="icon" />
//             </Button>
//           } */}
//         </Form>

//         <img
//           src={searchicon}
//           alt="searchicon"
//           className="Nicon"
//           onClick={redirectToProductList}
//         />
//         <img
//           src={carticon}
//           alt="Cart"
//           className="Cicon"
//           onClick={redirectToOrdersPage}
//         />
//         {/* <img
//           src={profileicon}
//           alt="Profile"
//           className="icon"
//         /> */}
//         <ProfilePopup userEmail={userEmail} />
//       </div>
//     </div>
//   );
// }

// export default NavigationBar;

import React from "react";
import "./NavigationBar.css"; // Import the CSS file for styling
import menuicon1 from "../../assets/menuicon1.jpg";
import carticon from "../../assets/carticon.png";
import profileicon from "../../assets/profileicon.jpeg";
import searchicon from "../../assets/searchicon.png";
import logo from "../../assets/logo.jpeg";
import buy from "../../assets/buy.png";
import logout1 from "../../assets/logout1.png";
import sell5 from "../../assets/sell5.png";
// import searchicon2 from "../../assets/searchicon2.png";
import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import ProfilePopup from "../ProfilePopup/ProfilePopup";
import { useNavigate } from "react-router-dom";

function NavigationBar({ userEmail }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const redirectToHomePage = () => {
    navigate("/");
  };

  const redirectToOrdersPage = () => {
    navigate("/orderspage");
  };

  const redirectToProductList = () => {
    navigate("/productlist");
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log("Search Query:", searchQuery);
    // Redirect to the product page or perform other search-related actions
    navigate("/productlist"); // Replace with the actual product page route
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          src={logo}
          alt="Logo"
          className="Licon"
          onClick={redirectToHomePage}
        />
      </div>
      <div className="navbar-right" style={{ width: "30%" }}>
        <Form className="search-bar" onSubmit={handleSearch}>
          <FormControl
            type="search"
            placeholder="Search..."
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form>

        <img
          src={searchicon}
          alt="searchicon"
          className="Nicon"
          onClick={redirectToProductList}
        />
        <img
          src={carticon}
          alt="Cart"
          className="Cicon"
          onClick={redirectToOrdersPage}
        />
        <ProfilePopup userEmail={userEmail} />
      </div>
    </div>
  );
}

export default NavigationBar;
