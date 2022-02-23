import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: "",
  firebaseToken: "",
  id: "",
  name: "",
  surName: "",
  email: "",
};
const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
    logout: (state, action) => {
      state = initialState;
    },
  },
});

export const { setUser, logout } = user.actions;
export default user.reducer;
