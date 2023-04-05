import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    addQuantity: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
    },
    subtractQuantity: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity - 1;
        }
        return item;
      });
    },
  },
});

export const { addToCart, removeFromCart, addQuantity, subtractQuantity } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
