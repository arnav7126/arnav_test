

import React, { useState, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar"; // Adjust the import path as necessary
import ProductComponent from "../../components/ProductComponent/ProductComponent"; // Adjust the import path as necessary
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import "./ProductList.css"; // Your custom CSS file for this component
import axios from "axios";
import { useLocation } from "react-router-dom";

function ProductListPage() {
  // State to store selected category and condition
  const location = useLocation();
  const initialState = location.state?.selectedCategory || "Any";
  const [selectedCategory, setSelectedCategory] = useState(initialState);

  // const [selectedCategory, setSelectedCategory] = useState("Any");
  const [selectedCondition, setSelectedCondition] = useState("Any");

  const [products, setProducts] = useState([]);
  const [searchString, setSearchString] = useState("");


  // Placeholder products array
  //   const products = [
  //     // ... your product data here
  //   ];


  useEffect(() => {
    // Fetch saved data from local storage if available
    const storedData = JSON.parse(localStorage.getItem("localStorageSearchData"));
    if (storedData) {
      setSelectedCategory(storedData.category || "Any");
      setSelectedCondition(storedData.condition || "Any");
      setSearchString(storedData.searchString || "");
    }
  }, []);

  const handleSearch = async () => {
    const searchObject = {
      category: selectedCategory,
      condition: selectedCondition,
      searchString: searchString,
    };
    console.log("Search Object:", searchObject);

    // Store data in local storage
    localStorage.setItem("localStorageSearchData", JSON.stringify(searchObject));

    try {
      // Send data to backend using Axios
      const response = await axios.post(
        "your_backend_endpoint_here",
        searchObject
      );
      console.log("Data sent to backend:", response.data);

      // Perform additional actions based on backend response if needed
    } catch (error) {
      console.error("Error sending data:", error);
      // Handle error if needed
    }
  };


  useEffect(() => {
    // Simulated fetch function
    const fetchData = async () => {
      try {
        // Fetch data from backend endpoint
        const data = await fetch("your_backend_endpoint_here");
        const fetchedProducts = await data.json();
        setProducts(fetchedProducts); // Set fetched products in state
        console.log("fetched products:", fetchedProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error if needed
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <NavigationBar />
    
      <Container fluid>
        <Row>
          <Col md={3} className="filter-section">
            <h2>Categories</h2>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedCategory}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSelectedCategory("Books")}>
                  Books
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory("Sports")}>
                  Sports
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Electronics")}
                >
                  Electronics
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory("SWD")}>
                  SWD
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Accessories")}
                >
                  Accessories
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Miscellaneous")}
                >
                  Miscellaneous
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory("Any")}>
                  Any
                </Dropdown.Item>
                {/* ... other categories */}
              </Dropdown.Menu>
            </Dropdown>

            <h2>Condition</h2>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedCondition}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSelectedCondition("New")}>
                  New
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCondition("Old")}>
                  Old
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCondition("Like New")}>
                  Like New
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCondition("Any")}>
                  Any
                </Dropdown.Item>
                {/* ... other conditions */}
              </Dropdown.Menu>
            </Dropdown>
            <input
              type="text"
              placeholder="Search..."
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <button
              className="search-with-filter-button"
              onClick={handleSearch}
            >
              Search
            </button>
          </Col>

          <Col md={9} className="product-list d-flex flex-wrap">
            <ProductComponent />
            <ProductComponent />

            {products.map((product) => (
              <ProductComponent key={product.id} {...product} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductListPage;


// // trial 1

// import React, { useState, useEffect } from "react";
// import NavigationBar from "../../components/NavigationBar/NavigationBar"; // Adjust the import path as necessary
// import ProductComponent from "../../components/ProductComponent/ProductComponent"; // Adjust the import path as necessary
// import { Container, Row, Col, Dropdown } from "react-bootstrap";
// import "./ProductList.css"; // Your custom CSS file for this component
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// function ProductListPage() {
//   // State to store selected category and condition
//   const location = useLocation();
//   const initialState = location.state?.selectedCategory || "Any";
//   const [selectedCategory, setSelectedCategory] = useState(initialState);
//   const [selectedCondition, setSelectedCondition] = useState("Any");
//   const [searchValue, setSearchValue] = useState("");

//   const [products, setProducts] = useState([]);

//   // Placeholder products array
//   //   const products = [
//   //     // ... your product data here
//   //   ];

//   const handleSearch = async () => {
//     const searchObject = {
//       category: selectedCategory,
//       condition: selectedCondition,
//       searchValue: searchValue,
//     };
//     console.log("Search Object:", searchObject);

//     try {
//       // Send data to backend using Axios
//       const response = await axios.post(
//         "your_backend_endpoint_here",
//         searchObject
//       );
//       console.log("Data sent to backend:", response.data);

//       // Perform additional actions based on backend response if needed
//     } catch (error) {
//       console.error("Error sending data:", error);
//       // Handle error if needed
//     }
//   };

//   useEffect(() => {
//     // Simulated fetch function
//     const fetchData = async () => {
//       try {
//         // Fetch data from backend endpoint
//         const data = await fetch("your_backend_endpoint_here");
//         const fetchedProducts = await data.json();
//         setProducts(fetchedProducts); // Set fetched products in state
//         console.log("fetched products:", fetchedProducts);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // Handle error if needed
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       <NavigationBar />
//       git
//       <Container fluid>
//         <Row>
//           <Col md={3} className="filter-section">
//             <h2>Categories</h2>
//             <Dropdown>
//               <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 {selectedCategory}
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item onClick={() => setSelectedCategory("Books")}>
//                   Books
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => setSelectedCategory("Sports")}>
//                   Sports
//                 </Dropdown.Item>
//                 <Dropdown.Item
//                   onClick={() => setSelectedCategory("Electronics")}
//                 >
//                   Electronics
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => setSelectedCategory("SWD")}>
//                   SWD
//                 </Dropdown.Item>
//                 <Dropdown.Item
//                   onClick={() => setSelectedCategory("Accessories")}
//                 >
//                   Accessories
//                 </Dropdown.Item>
//                 <Dropdown.Item
//                   onClick={() => setSelectedCategory("Miscellaneous")}
//                 >
//                   Miscellaneous
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => setSelectedCategory("Any")}>
//                   Any
//                 </Dropdown.Item>
//                 {/* ... other categories */}
//               </Dropdown.Menu>
//             </Dropdown>

//             <h2>Condition</h2>
//             <Dropdown>
//               <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 {selectedCondition}
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item onClick={() => setSelectedCondition("New")}>
//                   New
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => setSelectedCondition("Old")}>
//                   Old
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => setSelectedCondition("Like New")}>
//                   Like New
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => setSelectedCondition("Any")}>
//                   Any
//                 </Dropdown.Item>
//                 {/* ... other conditions */}
//               </Dropdown.Menu>
//             </Dropdown>
//             <button
//               className="search-with-filter-button"
//               onClick={handleSearch}
//             >
//               Search
//             </button>
//           </Col>

//           <Col md={9} className="product-list d-flex flex-wrap">
//             <ProductComponent />
//             {products.map((product) => (
//               <ProductComponent key={product.id} {...product} />
//             ))}
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default ProductListPage;