import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "P1",
      name: "Product 1",
      quantity: 0,
    },
    {
      id: "P2",
      name: "Product 2",
      quantity: 0,
    },
    {
      id: "P3",
      name: "Product 3",
      quantity: 0,
    },
    {
      id: "P4",
      name: "Product 4",
      quantity: 0,
    },
    {
      id: "P5",
      name: "Product 5",
      quantity: 0,
    },
  ],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
});

export default storeSlice.reducer;
