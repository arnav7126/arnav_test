import React, { useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar"; // Adjust the import path as necessary
import ProductComponent from "../../components/ProductComponent/ProductComponent"; // Adjust the import path as necessary
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import "./ProductList.css"; // Your custom CSS file for this component

function ProductListPage() {
  // State to store selected category and condition
  const [selectedCategory, setSelectedCategory] = useState("Any");
  const [selectedCondition, setSelectedCondition] = useState("Any");

  // Placeholder products array
  //   const products = [
  //     // ... your product data here
  //   ];

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
            <button className="search-with-filter-button">Search</button>
          </Col>

          <Col md={9} className="product-list d-flex flex-wrap">
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            {/* {products.map((product) => (
              <Product key={product.id} {...product} />
            ))} */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductListPage;
