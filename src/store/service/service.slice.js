import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestService, selectDriver } from "../../api/housemoveAPI.js";

const initialState = {
  origin: "",
  destiny: "",
  date: "",
  hour: "",
  detail: "",
};

/**
 * THUNKS
 */

export const request = createAsyncThunk("service/request", (data) =>
  requestService(data)
);

export const setDriver = createAsyncThunk("service/setDriver", (data) =>
  selectDriver(data)
);

const service = createSlice({
  name: "service",
  initialState: {
    service: initialState,
    drivers: [],
    requestState: {
      loading: false,
      error: false,
      message: "",
      status: "",
    },
    setDriverState: {
      loading: false,
      error: false,
      message: "",
      status: "",
    },
  },
  reducers: {
    setOrigin: (state, action) => {
      state.service.origin = action.payload;
    },
    setDestiny: (state, action) => {
      state.service.destiny = action.payload;
    },
    setDate: (state, action) => {
      state.service.date = action.payload;
    },
    setHour: (state, action) => {
      state.service.hour = action.payload;
    },
    setDetail: (state, action) => {
      state.service.detail = action.payload;
    },
    resetService: (state, action) => {
      state.service = initialState;
    },
    resetServiceMethodsMessage(state, action) {
      state[action.payload].message = "";
      state[action.payload].status = "";
    },
  },
  extraReducers: (builder) => {
    builder
      //* Request Method Thunk */
      .addCase(request.pending, (state) => {
        state.requestState.loading = true;
        state.requestState.error = false;
      })
      .addCase(request.fulfilled, (state, action) => {
        state.requestState.loading = false;
        state.requestState.error = false;

        if (action.payload.status === "Failed") {
          state.requestState.message = "Error solicitando el driver 😔";
          state.requestState.status = "Failed";
          return;
        }

        if (action.payload.status === "OK") {
          state.requestState.message = "El driver fue asignado con éxito 🙂";
          state.requestState.status = "OK";
          console.log(action.payload.data.drivers);
          state.service = action.payload.data.service;
          state.drivers = action.payload.data.drivers;
          return;
        }
      })
      .addCase(request.rejected, (state) => {
        state.requestState.loading = false;
        state.requestState.error = true;
      })
      //* Set Driver Method Thunk */
      .addCase(setDriver.pending, (state) => {
        state.setDriverState.loading = true;
        state.setDriverState.error = false;
      })
      .addCase(setDriver.fulfilled, (state, action) => {
        state.setDriverState.loading = false;
        state.setDriverState.error = false;

        if (action.payload.status === "Failed") {
          state.setDriverState.message = "Error solicitando el servicio 😔";
          state.setDriverState.status = "Failed";
          return;
        }

        if (action.payload.status === "OK") {
          state.setDriverState.message = "El servicio se solicitó con éxito 🙂";
          state.setDriverState.status = "OK";
          state.service = action.payload.data.service;
          state.drivers = [];
          return;
        }
      })
      .addCase(setDriver.rejected, (state) => {
        state.setDriverState.loading = false;
        state.setDriverState.error = true;
      });
  },
});

export const {
  resetServiceMethodsMessage,
  setOrigin,
  setDestiny,
  setDate,
  setHour,
  setDetail,
  resetService,
} = service.actions;

export const selectService = (state) => state.service.service;
export const selectDrivers = (state) => state.service.drivers;
export const selectRequestState = (state) => state.service.requestState;
export const selectSetDriverState = (state) => state.service.setDriverState;

export default service.reducer;
