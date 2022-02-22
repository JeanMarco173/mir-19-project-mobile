import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  origin: "",
  destiny: "",
  date: "",
  hour: "",
  detail: "",
};
const requestService = createSlice({
  name: "requestService",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestiny: (state, action) => {
      state.destiny = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setHour: (state, action) => {
      state.hour = action.payload;
    },
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setOrigin, setDestiny, setDate, setHour, setDetail } =
  requestService.actions;
export default requestService.reducer;
