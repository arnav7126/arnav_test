import React, { useState } from "react";
import "./AddProduct.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar"; // Replace with the actual import path
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Cloudinary} from "@cloudinary/url-gen"


const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'dpeibyaj6',
  },
  api: {
    apiKey: '736533651111549',
    apiSecret: '2ikscrghPUuYvV0FsFa6coZPnus',
  },
});

const AddProduct = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImages2, setSelectedImages2] = useState([]);

  const handleImageChange = async (e) => {
    const files = e.target.files;
    const imageArray = [];

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("file", files[i]);
      formData.append("upload_preset", "ml_default");
      
      try{
        const response = await fetch('https://api.cloudinary.com/v1_1/dpeibyaj6/image/upload',{
          method:'POST',
          body: formData,
        });

        const data = await response.json();
        imageArray.push(data.secure_url);
        console.log("Image uploaded URL:" ,data.secure_url);
      }catch (error){
        console.error("Error uploading image: ", error);
      }


      
      //imageArray.push(URL.createObjectURL(files[i]));
    }

    setSelectedImages(imageArray);
  };

  const navigate = useNavigate();

  const prodredirectToHomePage = () => {
    // Redirect to the "settings" route
    navigate("/");
    alert("Your product has been posted");
  };

  return (
    <div>
      <div className="nav-bar">
        <NavigationBar />
      </div>

      {/* Centered rounded rectangle */}
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
              <option value="mess-swap">Mess Swap</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="containing-4-div">
            {/* Big rectangle divided into 4 sections */}
            <div className="section" id="adTitleSection">
              <div className="label">Ad Title:</div>
              <input type="text" className="input" />
            </div>

            <div className="section" id="conditionSection">
              <div className="label">Condition:</div>
              <select className="input">
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="like-new">Like New</option>
              </select>
            </div>

            <div className="pdt-description-section" id="descriptionSection">
              <div className="label">Description:</div>
              <textarea className="input"></textarea>
            </div>

            <div className="section" id="priceSection">
              <div className="label">Set a price:</div>
              <input type="text" className="input" />
            </div>
          </div>
          <div className="uploadedPhotosSection">
            <div className="uploadPhotosLabel">Upload Photos:</div>

            {/* Individual photo boxes */}

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
            <div className="bottom-container">
              {/* Individual photo boxes for the bottom container */}
              {selectedImages.map((imageUrl, index) => (
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
      <button className="submit-button" onClick={prodredirectToHomePage}>
        Post
      </button>
    </div>
  );
};

export default AddProduct;
