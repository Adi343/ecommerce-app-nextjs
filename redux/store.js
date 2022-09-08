import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountSlice";
import storeReducer from "./storeSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    store: storeReducer,
  },
});
