import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// 從 localStorage 讀取購物車狀態
const savedCart = localStorage.getItem("cart");
const initialState = savedCart ? JSON.parse(savedCart) : [];

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: initialState,
  },
});

// 每次狀態變更時，保存購物車到 localStorage
store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
});

export default store;
