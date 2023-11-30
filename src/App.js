import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ProfilePopup from "./components/ProfilePopup/ProfilePopup";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import SellerChatButton from "./components/SellerChatButton/SellerChatButton";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import Login from "./pages/Login/Login";
import ck1 from "./assets/ck1.jpg";
import ck2 from "./assets/ck2.jpg";
import ck3 from "./assets/ck3.jpeg";
import ck4 from "./assets/ck4.jpg";
import ck5 from "./assets/ck5.jpg";
import Settings from "./pages/Settings/Settings";
import OrdersPage from "./pages/OrdersPane/OrdersPane";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import AddProduct from "./pages/AddProduct/AddProduct";
import ProductComponent from "./components/ProductComponent/ProductComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Funds from "./pages/Funds/Funds";
import ProductListPage from "./pages/ProductList/ProductList";
import ChatPage from "./pages/ChatPage/ChatPage";

function App() {
  const userEmail = "f20220063@hyderabad.bits-pilani.ac.in";
  const images = [
    { ck1 },
    { ck2 },
    { ck3 },
    { ck4 },
    { ck5 },
    // ... up to 8 images
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/orderspage" element={<OrdersPage />} />
        <Route path="/productlist" element={<ProductListPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orderspage" element={<OrdersPage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/chatpage" element={<ChatPage />} />
        <Route path="/funds" element={<Funds />} />
      </Routes>
    </Router>
  );
}

export default App;

/*import "./App.css";

import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
    </div>
  );
}

export default App;*/
//hi this is a test
