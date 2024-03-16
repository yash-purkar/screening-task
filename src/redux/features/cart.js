import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      const filteredProucts = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = filteredProucts;
    },
    incrementQuantity: (state, action) => {
      const updatedCartItems = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      state.cart = updatedCartItems;
    },
    decrementQuantity: (state, action) => {
      const updatedCartItems = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      state.cart = updatedCartItems;
    },
  },
});

export const { addToCart, removeFromCart,incrementQuantity,decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
