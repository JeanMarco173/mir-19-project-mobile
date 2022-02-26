import { houseMoveAPI } from "../../config.js";
import axios from "axios";

import { getTokenFromStorage } from "../utils/asyncStorage/manageAsyncStorage.js";

const consumer = async (url, method, body) => {
  const attributes = {
    method: method,
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
  };
  // Definimos las rutas que no estan protegidas
  if (
    url != `${houseMoveAPI}/customers/` ||
    url != `${houseMoveAPI}/customers/token`
  ) {
    const token = await getTokenFromStorage();
    attributes.headers.Authorization = `Bearer ${token}`;
  }
  if (body) attributes.data = body;
  let status;
  return axios(attributes)
    .then((res) => {
      status = res.status;
      return res.data;
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      const response = error.response;
      return response.data;
    });
};

/**
 * Customer
 */

const signUpCustomer = async (data) => {
  const url = `${houseMoveAPI}/customers/`;
  const response = await consumer(url, "POST", data);
  return response;
};

const getAccessToken = async (data) => {
  const url = `${houseMoveAPI}/customers/token/`;
  const response = await consumer(url, "POST", data);
  return response;
};

const addAddress = async (data) => {
  const url = `${houseMoveAPI}/customers/${data.customerId}/address`;
  const response = await consumer(url, "POST", data.body);
  return response;
};

const getAddresses = async (data, customerId) => {
  const url = `${houseMoveAPI}/customers/${customerId}/address`;
  const response = await consumer(url, "GET");
  return response;
};

/**
 * Service
 */

const requestService = async (data) => {
  const url = `${houseMoveAPI}/services/`;
  const response = await consumer(url, "POST", data);
  return response;
};

const selectDriver = async (data, serviceId) => {
  const url = `${houseMoveAPI}/services/${data.serviceId}/driver`;
  const response = await consumer(url, "PATCH", data.body);
  return response;
};

const getService = async (data) => {
  const url = `${houseMoveAPI}/services/${data.serviceId}/driver`;
  const response = await consumer(url, "PATCH", data.body);
  return response;
};

export {
  signUpCustomer,
  getAccessToken,
  addAddress,
  getAddresses,
  requestService,
  selectDriver,
};
