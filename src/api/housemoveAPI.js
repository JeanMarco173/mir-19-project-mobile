import { houseMoveAPI } from "../../config.js";
import axios from "axios";

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
    /* let token = await window.localStorage.getItem("userToken");
    token = JSON.parse(token);
    attributes.headers.Authorization = `Bearer ${token}`; */
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

const signUpCustomer = async (body) => {
  const url = `${houseMoveAPI}/customers/`;
  const response = await consumer(url, "POST", body);
  console.log("response", response);
  return response;
};

const getAccessToken = async (body) => {
  const url = `${houseMoveAPI}/customers/token/`;
  const response = await consumer(url, "POST", body);
  return response;
};

export { signUpCustomer, getAccessToken };
