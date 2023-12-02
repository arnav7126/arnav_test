import React, { useState } from "react";
import "./RightPane.css"; // Ensure your CSS styles are defined as needed
import { Button, Form } from "react-bootstrap";

const localStorageUser =
  JSON.parse(localStorage.getItem("localStorageUserData")) || {};

const Pane = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    console.log("Phone Number:", phoneNumber);
    console.log("Address:", address);
    setIsEditing(false);
  };

  return (
    <div className="right-pane">
      <div className="profile-header">
        <h2>Profile</h2>
      </div>
      <div className="profile-details">
        <img
          src={localStorageUser.profileImageUrl}
          className="profilePicture1"
        ></img>
        <h1 className="name">{localStorageUser.username}</h1>
        <p className="email">{localStorageUser.email}</p>
      </div>
      <div className="info-box">
        <div className="info-section">
          <div className="profile-input">Phone number:</div>
          {isEditing ? (
            <Form.Control
              className="profile-input-size"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          ) : (
            <span>{phoneNumber}</span>
          )}
        </div>
        <div className="infoboxline"></div>
        <div className="info-section">
          <div className="profile-input">Room Address:</div>
          {isEditing ? (
            <Form.Control
              className="profile-input-size"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          ) : (
            <span>{address}</span>
          )}
        </div>
        <div className="infoboxline"></div>
        {isEditing ? (
          <Button onClick={handleSaveClick}>Save</Button>
        ) : (
          <Button onClick={handleEditClick}>Edit</Button>
        )}
      </div>
    </div>
  );
};

export default Pane;

// import React, { useState } from "react";
// import "./RightPane.css"; // Ensure your CSS styles are defined as needed
// import { Button, Form } from "react-bootstrap";

// const Pane = () => {
//   const [editing, setEditing] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [address, setAddress] = useState("");

//   const handleEdit = () => {
//     setEditing(true);
//   };

//   const handleSave = () => {
//     setEditing(false);
//     // Additional logic to save the data can be added here
//   };

//   return (
//     <div className="right-pane">
//       <div className="profile-header">
//         <h2>Profile</h2>
//       </div>
//       <div className="profile-details">
//         <div className="profilePicture1"></div>
//         <h1 className="name">Rohan Sabu</h1>
//         <p className="email">f20220211@hyderabad.bits-pilani.ac.in</p>
//       </div>
//       <div className="info-box">
//         <div className="info-section">
//           <div className="profile-input">Phone number:</div>
//           {editing ? (
//             <Form.Control
//               className="profile-input-size"
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//           ) : (
//             <span>{phoneNumber}</span>
//           )}
//         </div>
//         <div className="infoboxline"></div>
//         <div className="info-section">
//           <div className="profile-input">Room Address:</div>
//           {editing ? (
//             <Form.Control
//               className="profile-input-size"
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           ) : (
//             <span>{address}</span>
//           )}
//         </div>
//         <div className="infoboxline"></div>
//         <Button onClick={editing ? handleSave : handleEdit}>
//           {editing ? "Save" : "Edit"}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Pane;
