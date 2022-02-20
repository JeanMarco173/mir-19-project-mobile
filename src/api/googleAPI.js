import { googleToken, googleMapsAPI } from "./config.js";
import axios from "axios";

const findPlace = async (query) => {
  try {
    const url = `${googleMapsAPI}autocomplete/json?key=${googleToken}&components=country:PE&input=${query}`;
    const response = await axios.get(url);
    const { data } = await response;
    if (data.status === "OK" && data.predictions.length > 0) {
      return data.predictions;
    } else if (data.status === "OK" && predictions.length === 0) {
      return "No se encontraron coincidencias.";
    } else {
      return "Error buscando la dirección. Intentelo más tarde.";
    }
  } catch (error) {
    return "Error de interno del servidor. Intentelo más tarde.";
  }
};

const getPlaceDetail = async (placeId) => {
  try {
    const url = `${googleMapsAPI}details/json?key=${googleToken}&place_id=${placeId}`;
    const { data } = await axios.get(url);
    if (data.status === "OK") {
      return data.result;
    } else {
      return "Error seleccionando la dirección. Intentelo más tarde.";
    }
  } catch (error) {
    return "Error de interno del servidor. Intentelo más tarde.";
  }
};

export { findPlace, getPlaceDetail };
