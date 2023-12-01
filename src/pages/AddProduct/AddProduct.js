import React, { useState } from "react";
import "./AddProduct.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Cloudinary } from "@cloudinary/url-gen";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "dpeibyaj6",
  },
  api: {
    apiKey: "736533651111549",
    apiSecret: "2ikscrghPUuYvV0FsFa6coZPnus",
  },
});

const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    basePrice: "",
    category: "Books",
    condition: "New",
    productImageUrl: [],
  });

  const handleImageChange = async (e) => {
    const files = e.target.files;
    const imageArray = [];

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("file", files[i]);
      formData.append("upload_preset", "ml_default");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dpeibyaj6/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        imageArray.push(data.secure_url);
        console.log("Image uploaded URL:", data.secure_url);
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }

    setProductData({ ...productData, productImageUrl: imageArray }); // Update productImageUrl in productData
  };

  // const formattedProductData = {
  //   ...productData, // Copy other properties
  //   productImageUrl: productData.productImageUrl.join(',') // Convert array to comma-separated string so that backend wont throw error
  // };

  const navigate = useNavigate();

  const prodRedirectToHomePage = () => {
    // Redirect to the "settings" route
    navigate("/homepage");
    alert("Your product has been posted");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handlePriceValidation = () => {
    const isValidPrice = /^\d+$/.test(productData.basePrice);
    if (!isValidPrice) {
      alert("Please enter a valid integer base price.");
    } else {
      // Perform other actions on valid basePrice (e.g., submit data)
      // Add your logic here to submit the product data
      // For example:
      axios
        .post("http://localhost:8080/products", productData)
        .then(() => {
          // Handle success
        })
        .catch((error) => {
          // Handle error
        });
      // console.log(productData);
      // prodRedirectToHomePage();
    }
  };
  return (
    <div>
      <div className="nav-bar">
        <NavigationBar />
      </div>

      <div className="pdtcenteredRectangle">
        <div className="pdtroundedRectangle">
          <h1>Post Your Product</h1>

          {/* Horizontal rectangle with category dropdown */}
          <div className="categoryRectangle">
            <div id="categoryLabel">Category:</div>
            <select id="categoryDropdown">
              <option value="books">Books</option>
              <option value="sports">Sports</option>
              <option value="electronics">Electronics</option>
              <option value="SWD">SWD</option>
              <option value="accessories">Accessories</option>
              <option value="miscellaneous">Miscellaneous</option>
            </select>
          </div>

          <div className="containing-4-div">
            {/* ... Input sections for title, condition, description, and price ... */}
            {/* Big rectangle divided into 4 sections */}
            <div className="section" id="adTitleSection">
              <div className="label">Title:</div>
              <input
                type="text"
                className="input"
                name="title"
                onChange={handleInputChange}
              />
            </div>

            <div className="section" id="conditionSection">
              <div className="label">Condition:</div>
              <select
                className="input"
                name="condition"
                onChange={handleInputChange}
              >
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="like-new">Like New</option>
              </select>
            </div>

            <div className="pdt-description-section" id="descriptionSection">
              <div className="label">Description:</div>
              <textarea
                className="input"
                name="description"
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="section" id="priceSection">
              <div className="label">Set a base price:</div>
              <input
                type="text"
                className="input"
                name="basePrice"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="uploadedPhotosSection">
            <div className="uploadPhotosLabel">Upload Photos:</div>
            {/* Individual photo boxes */}
            <input
              type="file"
              accept="image/*"
              multiple
              name="productImageUrl"
              onChange={handleImageChange}
            />
            <div className="bottom-container">
              {/* Display uploaded images */}
              {productData.productImageUrl.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Uploaded ${index}`}
                  className="bottomPhotoBox"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <button className="submit-button" onClick={handlePriceValidation}>
        Post
      </button>
    </div>
  );
};

export default AddProduct;
