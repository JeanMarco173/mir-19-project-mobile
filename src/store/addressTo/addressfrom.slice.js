import { createSlice } from "@reduxjs/toolkit";

const addressToSlice = createSlice({
  name: "addressTo",
  initialState: {
    name: "",
    location: {
      lat: 0,
      lng: 0,
    },
  },
  reducers: {
    setAddressTo: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setAddressTo } = addressToSlice.actions;
export default addressToSlice.reducer;
