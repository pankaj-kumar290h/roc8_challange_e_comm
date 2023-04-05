import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../reducer/productReducer";
import { cartReducer } from "../reducer/cartReducer";

const store = configureStore({
  reducer: {
    AllProducts: productReducer,
    Cart: cartReducer,
  },
});

export default store;
