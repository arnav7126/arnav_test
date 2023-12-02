import React from "react";
import "./ProductDescription.css"; // Make sure to create a CSS file with this name

const ProductDescription = ({ category, condition, description }) => {
  return (
    <div className="product-description">
      <div className="pdt-section">
        <div className="left-pane">Category:</div>
        <div className="product-description-right-pane">{category}</div>
      </div>
      <div className="pdt-section">
        <div className="left-pane">Condition:</div>
        <div className="product-description-right-pane">{condition}</div>
      </div>
      <div className="pdtdescriptionsection">{description}Description: </div>
    </div>
  );
};

export default ProductDescription;
