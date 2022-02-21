import { configureStore } from "@reduxjs/toolkit";
import addresFromReducer from "./addressFrom/addressfrom.slice.js";
import addresToReducer from "./addressTo/addressfrom.slice.js";

export const store = configureStore({
  reducer: {
    addresFrom: addresFromReducer,
    addresTo: addresToReducer,
  },
});
