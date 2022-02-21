import { configureStore } from "@reduxjs/toolkit";
import requestServiceReducer from "./requestService/requestservice.slice.js";

export const store = configureStore({
  reducer: {
    requestService: requestServiceReducer,
  },
});
