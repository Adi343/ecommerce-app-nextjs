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
      // const newCart = state.itemsInCart.map((item) => {
      //   if (item.id === action.payload.id) {
      //     item.quantity = action.payload.quantity;
      //   }
      //   return item;
      // });
      // console.log(JSON.stringify(action.payload));
      let newCart = [...state.itemsInCart];
      const index = newCart.findIndex((item) => item.id === action.payload.id);
      console.log(index);
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
      console.log(JSON.stringify(state.itemsInCart));
      // state.itemsInCart = [...state.itemsInCart, product];
      state.itemsInCart = newCart;
    },
    test: (state) => {
      console.log("called!");
      console.log(state);
    },
  },
});

export const { addItemToCart, removeItemInCart } = accountSlice.actions;

export default accountSlice.reducer;
