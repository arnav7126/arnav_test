import { useState, useRef, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import ck1 from "../../assets/ck1.jpg";
import ck2 from "../../assets/ck2.jpg";
import ck3 from "../../assets/ck3.jpeg";
import ck4 from "../../assets/ck4.jpg";
import ck5 from "../../assets/ck5.jpg";

function ImageCarousel() {
  return (
    <div className="image-carousel">
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
  );
}

export default ImageCarousel;

// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "./ImageCarousel.css"; // Make sure to create a CSS file with this name

// const ImageCarousel = ({ images }) => {
//   return (
//     <Carousel interval={3000} className="image-carousel">
//       {images.map((image, idx) => (
//         <Carousel.Item key={idx}>
//           <img
//             className="d-block w-60 image-contain"
//             src={image}
//             alt={`Slide ${idx + 1}`}
//           />
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

//export default ImageCarousel;

// import React, { useState, useEffect } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "./ImageCarousel.css"; // Make sure to create a CSS file with this name

// const ImageCarousel = ({ images }) => {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to first image
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, [images]);

//   return (
//     <Carousel
//       activeIndex={index}
//       onSelect={handleSelect}
//       className="image-carousel"
//     >
//       {images.map((image, idx) => (
//         <Carousel.Item key={idx}>
//           <img className="d-block w-100" src={image} alt={`Slide ${idx}`} />
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default ImageCarousel;
