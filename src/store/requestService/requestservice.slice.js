import { createSlice } from "@reduxjs/toolkit";

const requestService = createSlice({
  name: "requestService",
  initialState: {
    origin: "",
    destiny: "",
    date: "",
    paymentMethod: "",
    detail: "",
  },
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestiny: (state, action) => {
      state.destiny = action.payload;
    },
    setRequestService: (state, action) => {
      state.date = action.payload.date;
      state.paymentMethod = action.payload.paymentMethod;
      state.detail = action.payload.detail;
    },
  },
});

export const { setOrigin, setDestiny, setRequestService } =
  requestService.actions;
export default requestService.reducer;
