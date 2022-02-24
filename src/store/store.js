import { configureStore } from "@reduxjs/toolkit";
import requestServiceReducer from "./requestService/requestservice.slice.js";
import userReducer from "./user/user.slice.js";

export const store = configureStore({
  reducer: {
    requestService: requestServiceReducer,
    user: userReducer,
  },
});
