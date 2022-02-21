import { createSlice } from "@reduxjs/toolkit";

const addressFromSlice = createSlice({
  name: "addressFrom",
  initialState: {
    name: "",
    location: {
      lat: 0,
      lng: 0,
    },
  },
  reducers: {
    setAddressFrom: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setAddressFrom } = addressFromSlice.actions;
export default addressFromSlice.reducer;
