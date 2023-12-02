// OrdersPage.js
import React from "react";
import "./OrdersPane.css";
import LeftPane from "../../components/LeftPane/LeftPane";
import year1books from "../../assets/books1.jpg";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import OrdersComponent from "../../components/OrdersComponent/OrdersComponent";

const OrdersPage = () => {
  return (
    <div>
      <NavigationBar />

      <div className="orders-container">
        <LeftPane />
        <div className="orders-right-pane">
          <h1 className="orders-header">My Cart</h1>
          <OrdersComponent />
          {/* Add more order items as needed */}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
