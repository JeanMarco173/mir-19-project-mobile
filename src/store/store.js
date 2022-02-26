import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./service/service.slice.js";
import userReducer from "./user/user.slice.js";

export const store = configureStore({
  reducer: {
    service: serviceReducer,
    user: userReducer,
  },
});
