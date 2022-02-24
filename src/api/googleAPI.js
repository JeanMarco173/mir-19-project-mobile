import {
  googleToken,
  googleMapsAPI,
  googleMapsRouteAPI,
} from "../../config.js";
import axios from "axios";

/**
 *
 * Servicio que nos permite obtener lugares para el buscador
 */
const findPlace = async (query) => {
  try {
    const url = `${googleMapsAPI}autocomplete/json?key=${googleToken}&components=country:PE&input=${query}`;
    const { data } = await axios.get(url);
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

/**
 *
 * Servicio que nos permite obtener los datos de un lugar
 */
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

/**
 *
 * Servicio que nos permite la ruta entre direcciones
 */
const getRoute = async (origin, destiny) => {
  try {
    const url = `${googleMapsRouteAPI}json?key=${googleToken}&origin=${origin}&destination=${destiny}`;
    const { data } = await axios.get(url);
    if (data.status === "OK") {
      return data.routes;
    } else {
      return "Error seleccionando la dirección. Intentelo más tarde.";
    }
  } catch (error) {
    return "Error de interno del servidor. Intentelo más tarde.";
  }
};

export { findPlace, getPlaceDetail, getRoute };
