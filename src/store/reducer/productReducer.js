import { createSlice } from "@reduxjs/toolkit";
import { AllProducts } from "../../constant/baseUrl";

const productSlice = createSlice({
  name: "productSlice",
  initialState: [],
  reducers: {
    addProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const fetchProducts = () => {
  return (dispatch) => {
    fetch(AllProducts)
      .then((data) => data.json())
      .then((data) => {
        dispatch(addProducts(data));
      })
      .catch((err) => console.log(err));
  };
};

export const { addProducts } = productSlice.actions;

export const productReducer = productSlice.reducer;
