import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "P1",
      name: "Carrot 1",
      quantity: 0,
    },
    {
      id: "P2",
      name: "Carrot 2",
      quantity: 0,
    },
    {
      id: "P3",
      name: "Carrot 3",
      quantity: 0,
    },
    {
      id: "P4",
      name: "Carrot 4",
      quantity: 0,
    },
    {
      id: "P5",
      name: "Carrot 5",
      quantity: 0,
    },
  ],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
});

export default storeSlice.reducer;
