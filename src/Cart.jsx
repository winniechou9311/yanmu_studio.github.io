import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "./cartSlice";

import { calculatePrice } from "./utilities/calculatePrice";

import "./Cart.css";
import "./styles/GeneralStyle.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (acc, item) =>
      acc +
      calculatePrice(
        item.selectedServiceType,
        item.weddingType,
        item.numberOfPeople,
        item.needDress,
        item.hikingType
      ) *
        item.quantity,
    0
  );

  return (
    <div className="routes-container">
      <div className="cart-container">
        <div className="cart-items">
          <ul>
            {cartItems.map((item) => {
              const itemPrice = calculatePrice(
                item.selectedServiceType,
                item.weddingType,
                item.numberOfPeople,
                item.needDress,
                item.hikingType
              );

              return (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-title">{item.name}</div>
                  <div>
                    <span>預約人數:</span>
                    <span>{item.people}</span>
                  </div>
                  <div>
                    <span>預約日期:</span>
                    <span>{item.date}</span>
                  </div>
                  <div>
                    <span>預約時段:</span>
                    <span>{item.time}</span>
                  </div>
                  {/* ... Other item details ... */}
                  <div className="cart-item-remove-btn">
                    <button onClick={() => dispatch(removeItem(item))}>
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="cart-summary">
          <div className="cart-summary-item">
            Total Amount: NT${totalAmount}
          </div>
          <button onClick={() => dispatch(clearCart())} className="cart-clear">
            清除購物車
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
