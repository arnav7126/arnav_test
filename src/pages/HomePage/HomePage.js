import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar"; // Assuming you have this component
import "./HomePage.css"; // Make sure to create a CSS file with this name
//import PlayArena1 from "../../assets/PlayArena1.jpg";
import misc from "../../assets/misc.png";
import accessories1 from "../../assets/accessories1.png";
import books from "../../assets/books.jpg";
import swd from "../../assets/swd.jpg";
import sports1 from "../../assets/sports1.jpg";
import electronics from "../../assets/electronics.jpg";
import sell5 from "../../assets/sell5.png";
import casered from "../../assets/casered.png";
import Carousel from "react-bootstrap/Carousel";
import ck1 from "../../assets/ck1.jpg";
import ck2 from "../../assets/ck2.jpg";
import ck3 from "../../assets/ck3.jpeg";
import ck4 from "../../assets/ck4.jpg";
import ck5 from "../../assets/ck5.jpg";
import { useNavigate } from "react-router-dom";
// ... other imports

function HomePage() {
  const navigate = useNavigate();

  const redirectToProductListWithCategory = (category) => {
    navigate("/productlist", { state: { selectedCategory: category } });
  };

  // const redirectToProductList = () => {
  //   navigate("/productlist");
  // };

  return (
    <>
      <NavigationBar /> {/* This is your existing navigation bar component */}
      <div className="division first-division">
        <div className="left-pane">
          <h1 className="pane-text">
            BUY
            <img src={sell5} alt="Sell" className="redicon" />
          </h1>
          <h1 className="pane-text">AND</h1>
          <h1 className="pane-text">
            <img src={casered} alt="Buy" className="redicon" />
            SELL
          </h1>
        </div>
        <div className="home-right-pane">
          <Carousel className="carousel">
            <Carousel.Item>
              <img
                className="d-block w-60 image-contain"
                src={ck1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-60 image-contain"
                src={ck2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-60 image-contain"
                src={ck3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-60 image-contain"
                src={ck4}
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-60 image-contain"
                src={ck5}
                alt="Fifth slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="division second-division">
        {/* Repeat this block for each icon */}
        <div className="icon-container">
          <img
            src={books}
            alt="Books"
            className="icon"
            onClick={() => redirectToProductListWithCategory("Books")}
          />
          <p className="icon-name">Books</p>
        </div>
        <div className="icon-container">
          <img
            src={sports1}
            alt="Sports"
            className="icon"
            onClick={() => redirectToProductListWithCategory("Sports")}
          />
          <p className="icon-name">Sports</p>
        </div>
        <div className="icon-container">
          <img
            src={electronics}
            alt="Electronics"
            className="icon"
            onClick={() => redirectToProductListWithCategory("Electronics")}
          />
          <p className="icon-name">Electronics</p>
        </div>
        <div className="icon-container">
          <img
            src={swd}
            alt="SWD"
            className="icon"
            onClick={() => redirectToProductListWithCategory("SWD")}
          />
          <p className="icon-name">SWD</p>
        </div>
        <div className="icon-container">
          <img
            src={accessories1}
            alt="Accessories"
            className="icon"
            onClick={() => redirectToProductListWithCategory("Accessories")}
          />
          <p className="icon-name">Accessories</p>
        </div>
        <div className="icon-container">
          <img
            src={misc}
            alt="Misc"
            className="icon"
            onClick={() => redirectToProductListWithCategory("Miscellaneous")}
          />
          <p className="icon-name">Misc</p>
        </div>
        {/* ... Other icon containers */}
      </div>
      <div className="division third-division">
        {/* Content for third division here */}
      </div>
    </>
  );
}

export default HomePage;

// import React, { useState } from 'react';
// import NavigationBar from '../../components/NavigationBar/NavigationBar';
// import './HomePage.css';
// import { images } from '../../path/to/imageData'; // Assuming you export an array of image paths

// function HomePage() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const goToNextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Replace the useEffect if you want to auto-slide
//   React.useEffect(() => {
//     const intervalId = setInterval(goToNextImage, 3000); // Change image every 3 seconds

//     return () => clearInterval(intervalId); // Clear interval on component unmount
//   }, []);

//   return (
//     <>
//       <NavigationBar /> {/* This is your existing navigation bar component */}
//       <div className="division first-division">
//         <div className="left-pane">
//           {/* Left pane content */}
//         </div>
//         <div className="right-pane">
//           {/* Image carousel */}
//           <img src={images[currentImageIndex]} alt="Carousel" className="main-image" />
//           <button className="next-button" onClick={goToNextImage}>Next</button>
//         </div>
//       </div>
//       {/* ... rest of the component */}
//     </>
//   );
// }

// export default HomePage;
