import React, { useState } from "react";
import "./ProductDetails.css"; // Make sure to create a CSS file with this name
import heart from "../../assets/heart.png"; // Replace with your local path
import redheart2 from "../../assets/redheart2.png";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

function ProductDetails({
  startingBid, // Dynamic starting bid from props
  userTitle, // Dynamic user-provided title from props
  userDescription, // Dynamic user-provided description from props
  timeLeft,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentBid, setCurrentBid] = useState(0); // Initialize current bid to zero
  const [bidAmount, setBidAmount] = useState(""); // State to hold the bid amount entered by the user
  const countdownToTime = "23:59:59";

  const handlePlaceBid = () => {
    const bidValue = Number(bidAmount);
    const startingValue = 10;
    const currentBidValue = Number(currentBid);

    if (bidValue > currentBidValue && bidValue >= startingValue) {
      setCurrentBid(bidValue); // Update current bid with the entered bid amount
      alert("Bid has been placed");
      console.log("Current Bid:", bidValue);
    } else {
      alert("Invalid bid amount");
    }
    setBidAmount(""); // Clear the bid amount input field
  };

  // const handlePlaceBid = () => {
  //   // Convert bidAmount and startingBid to numbers for comparison
  //   const bidValue = Number(bidAmount);
  //   const startingBid = 10;
  //   const startingValue = Number(startingBid);

  //   if (bidValue >= startingValue) {
  //     alert("Bid has been placed");
  //     setCurrentBid(bidValue); // Update current bid with the entered bid amount
  //     console.log("Current Bid:", bidValue);
  //   } else {
  //     alert("Invalid bid amount");
  //   }
  //   setBidAmount(""); // Clear the bid amount input field
  // };

  return (
    <div className="product-details">
      {/* First Division */}
      <div className="division first">
        <div className="starting-bid">
          <h3 className="biddingprice">{startingBid} rupees &nbsp;</h3>
          <h5 className="startingbid">starting bid</h5>
        </div>
        <div className="heart-icon" onClick={() => setIsFavorite(!isFavorite)}>
          {!isFavorite ? (
            <img src={heart} alt="Favorite" />
          ) : (
            <img src={redheart2} alt="Favorite" />
          )}
        </div>
      </div>

      {/* Second Division */}
      <div className="division-second">
        <h3>Title: {userTitle}</h3> {/* Dynamic user-provided title */}
        <h5>Description: {userDescription}</h5>{" "}
        {/* Dynamic user-provided description */}
      </div>

      {/* Third Division */}
      <div className="division third">
        <div className="current-bid">
          <div className="current-bid-text">
            <h4 style={{ color: "red" }}>{currentBid} rupees</h4>
          </div>
          <h5>current bid</h5>
          <input
            className="enter-bid-amount"
            type="number"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            placeholder="Enter bid amount"
          />
        </div>
        <button className="place-bid-btn" onClick={handlePlaceBid}>
          Place Bid
        </button>
      </div>
      {/* <div className="division third">
        <div className="current-bid">
          <h3 style={{ color: "red" }}>{currentBid} rupees &nbsp;</h3>
          <h5>current bid</h5>
        </div>
        <button className="place-bid-btn">Place Bid</button>
      </div> */}

      {/* Fourth Division */}
      <div className="division fourth">
        <h2>bidding ends in</h2>
        <div className="countdown-timer">
          <CountdownTimer targetTime={countdownToTime} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

// import React, { useState } from "react";
// import "./ProductDetails.css"; // Make sure to create a CSS file with this name
// import heart from "../../assets/heart.png"; // Replace with your local path
// import redheart2 from "../../assets/redheart2.png";
// import CountdownTimer from "../CountdownTimer/CountdownTimer";

// function ProductDetails({
//   startingBid,
//   title,
//   description,
//   currentBid,
//   timeLeft,
// }) {
//   const [isFavorite, setIsFavorite] = useState(false);
//   const countdownToTime = "23:59:59";

//   return (
//     <div className="product-details">
//       {/* First Division */}
//       <div className="division first">
//         <div className="starting-bid">
//           <h3 className="biddingprice">{startingBid} 3700 rupees &nbsp;</h3>
//           <h5 className="startingbid">starting bid</h5>
//         </div>
//         <div className="heart-icon" onClick={() => setIsFavorite(!isFavorite)}>
//           {!isFavorite ? (
//             <img src={heart} alt="Favorite" />
//           ) : (
//             <img src={redheart2} alt="Favorite" />
//           )}
//         </div>
//       </div>

//       {/* Second Division */}
//       <div className="division-second">
//         <h3>{title}Title</h3>
//         <h5>{description}Description</h5>
//       </div>

//       {/* Third Division */}
//       <div className="division third">
//         <div className="current-bid">
//           <h3 style={{ color: "red" }}>{currentBid} 5400 rupees &nbsp;</h3>
//           <h5>current bid</h5>
//         </div>
//         <button className="place-bid-btn">Place Bid</button>
//       </div>

//       {/* Fourth Division */}
//       <div className="division fourth">
//         <h2>bidding ends in</h2>
//         <div className="countdown-timer">
//           <CountdownTimer targetTime={countdownToTime} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;
