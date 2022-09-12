import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  itemsInCart: [],
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      let newCart = [...state.itemsInCart];
      const index = newCart.findIndex((item) => item.id === action.payload.id);
      if (index === -1) {
        newCart = [...newCart, action.payload];
      } else {
        newCart[index].quantity = action.payload.quantity;
      }

      state.itemsInCart = newCart;
    },
    removeItemInCart: (state, action) => {
      const productId = action.payload.id;
      const newCart = [...state.itemsInCart];
      const index = newCart.findIndex((item) => item.id === action.payload.id);
      if (index === -1) {
        newCart = [...newCart, action.payload];
      } else {
        newCart[index].quantity = action.payload.quantity;
      }
      // const product = {
      //   id: productId,
      //   name: action.payload.name,
      //   quantity: action.payload.quantity - 1,
      // };

      // state.itemsInCart = [...state.itemsInCart, product];
      state.itemsInCart = newCart;
    },
    resetCart: (state) => {
      state.itemsInCart = [];
    },
  },
});

export const { addItemToCart, removeItemInCart, resetCart } =
  accountSlice.actions;

export default accountSlice.reducer;
