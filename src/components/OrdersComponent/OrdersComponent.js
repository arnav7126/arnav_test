import year1books from "../../assets/books1.jpg";
import "./OrdersComponent.css";

const OrdersComponent = () => {
  return (
    <div className="order-item">
      <img src={year1books} className="order-image"></img>
      <div className="order-details">
        <div className="book-info">
          <div className="orders-heading">
            Year 1 Sem 1 Books General Chemistry, Mechanics Oscillations &
            Waves...
          </div>
        </div>
        <div className="purchase-info">
          <div className="sold-for">
            Bought for 4000 Aarks Collected on 2nd August 2023
          </div>
        </div>
      </div>
      <div className="additional-image"></div>
    </div>
  );
};

export default OrdersComponent;
