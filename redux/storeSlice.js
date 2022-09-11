import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "P1",
      name: "Apple",
      quantity: 0,
    },
    {
      id: "P2",
      name: "Coffee",
      quantity: 0,
    },
    {
      id: "P3",
      name: "Pizza",
      quantity: 0,
    },
    {
      id: "P4",
      name: "Bread",
      quantity: 0,
    },
    {
      id: "P5",
      name: "Chocolate",
      quantity: 0,
    },
  ],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
});

export default storeSlice.reducer;
