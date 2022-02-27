import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  signUpCustomer,
  getAccessToken,
  getAddresses,
  addAddress,
} from "../../api/housemoveAPI.js";

const initialState = {
  id: "",
  name: "",
  surName: "",
  email: "",
  avatarUrl: "",
};

/**
 * THUNKS
 */

export const signUp = createAsyncThunk("user/signUp", (data) =>
  signUpCustomer(data)
);

export const getAccesToken = createAsyncThunk("user/getAccesToken", (data) =>
  getAccessToken(data)
);

export const getAddressesByUser = createAsyncThunk(
  "user/getAddressesByUser",
  (data) => getAddresses(data)
);

export const addAddressToUser = createAsyncThunk(
  "user/addAddressToUser",
  (data) => addAddress(data)
);

/**
 * SLICE
 */

const user = createSlice({
  name: "user",
  initialState: {
    user: initialState,
    token: "",
    isAuth: false,
    addresses: [],
    signUpState: {
      loading: false,
      error: false,
      message: "",
      status: "",
    },
    getAccesTokenState: {
      loading: false,
      error: false,
      message: "",
      status: "",
    },
    getAddressesByUserState: {
      loading: false,
      error: false,
      message: "",
      status: "",
    },
    addAddressToUserState: {
      loading: false,
      error: false,
      message: "",
      status: "",
    },
  },
  reducers: {
    resetUserMethodsMessage(state, action) {
      state[action.payload].message = "";
      state[action.payload].status = "";
    },
    setInitalStateLogin(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setIsAuth: (state, action) => {
      state.isAuth = true;
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
      state.addresses = [];
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      //* Sign Up Method Thunk */
      .addCase(signUp.pending, (state) => {
        state.signUpState.loading = true;
        state.signUpState.error = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.signUpState.loading = false;
        state.signUpState.error = false;

        if (action.payload.status === "Failed") {
          state.signUpState.message = "Error registrando al usuario 😔";
          state.signUpState.status = "Failed";
          return;
        }

        if (action.payload.status === "OK") {
          state.signUpState.message = "El usuario fue registrado con éxito 🙂";
          state.signUpState.status = "OK";
          return;
        }
      })
      .addCase(signUp.rejected, (state) => {
        state.signUpState.loading = false;
        state.signUpState.error = true;
      })
      //* Get Access Token Method Thunk */
      .addCase(getAccesToken.pending, (state) => {
        state.getAccesTokenState.loading = true;
        state.getAccesTokenState.error = false;
      })
      .addCase(getAccesToken.fulfilled, (state, action) => {
        state.getAccesTokenState.loading = false;
        state.getAccesTokenState.error = false;

        if (action.payload.status === "Failed") {
          state.getAccesTokenState.message = "Error iniciando sesión 😔";
          state.getAccesTokenState.status = "Failed";
          return;
        }

        if (action.payload.status === "OK") {
          state.getAccesTokenState.message = "Se inicio sesión con éxito 🙂";
          state.getAccesTokenState.status = "OK";
          state.user = action.payload.data.customer;
          state.token = action.payload.data.token;
          return;
        }
      })
      .addCase(getAccesToken.rejected, (state) => {
        state.getAccesTokenState.loading = false;
        state.getAccesTokenState.error = true;
      })
      //* Get Addresses Method Thunk */
      .addCase(getAddressesByUser.pending, (state) => {
        state.getAddressesByUserState.loading = true;
        state.getAddressesByUserState.error = false;
      })
      .addCase(getAddressesByUser.fulfilled, (state, action) => {
        state.getAddressesByUserState.loading = false;
        state.getAddressesByUserState.error = false;

        if (action.payload.status === "Failed") {
          state.getAddressesByUserState.message =
            "Error listando las direcciones 😔";
          state.getAddressesByUserState.status = "Failed";
          return;
        }

        if (action.payload.status === "OK") {
          state.getAddressesByUserState.message =
            "Se listó las direcciones con éxito 🙂";
          state.getAddressesByUserState.status = "OK";
          state.addresses = action.payload.data.addresses;
          return;
        }
      })
      .addCase(getAddressesByUser.rejected, (state) => {
        state.getAddressesByUserState.loading = false;
        state.getAddressesByUserState.error = true;
      });
  },
});

export const {
  resetUserMethodsMessage,
  logout,
  setInitalStateLogin,
  setIsAuth,
} = user.actions;

export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.user.token;
export const selecIsAuth = (state) => state.user.isAuth;
export const selecAddresses = (state) => state.user.addresses;
export const selectSignUpState = (state) => state.user.signUpState;
export const selectGetAccesTokenState = (state) =>
  state.user.getAccesTokenState;
export const selectGetAddressesByUserState = (state) =>
  state.user.getAddressesByUserState;
export const selectAddAddressToUserState = (state) =>
  state.user.addAddressToUserState;
export default user.reducer;
