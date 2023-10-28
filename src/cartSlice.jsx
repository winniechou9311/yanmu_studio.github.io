import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item && item.people < 5) {
        item.people += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item && item.people > 1) {
        item.people -= 1;
      }
    },
    clearCart: () => [],
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
