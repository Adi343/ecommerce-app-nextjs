import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  itemsInCart: [],
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.itemsInCart = [...itemsInCart, action.payload];
    },
  },
});

export const { addItem } = accountSlice.actions;

export default accountSlice.reducerß;
