import React, { useState } from "react";
import "./ProductDetails.css"; // Make sure to create a CSS file with this name
import heart from "../../assets/heart.png"; // Replace with your local path
import redheart2 from "../../assets/redheart2.png";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

function ProductDetails({
  startingBid,
  title,
  description,
  currentBid,
  timeLeft,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const countdownToTime = "23:59:59";

  return (
    <div className="product-details">
      {/* First Division */}
      <div className="division first">
        <div className="starting-bid">
          <h3 className="biddingprice">{startingBid} 3700 rupees &nbsp;</h3>
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
        <h3>{title}Title</h3>
        <h5>{description}Description</h5>
      </div>

      {/* Third Division */}
      <div className="division third">
        <div className="current-bid">
          <h3 style={{ color: "red" }}>{currentBid} 5400 rupees &nbsp;</h3>
          <h5>current bid</h5>
        </div>
        <button className="place-bid-btn">Place Bid</button>
      </div>

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
