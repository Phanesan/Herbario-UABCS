import axios from "axios";

const routeAPI = axios.create({
  baseURL: import.meta.env.VITE_API_ROUTE,
});

export function setClientToken(token) {
  routeAPI.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
}

export async function fetchLoginAPI(body) {
  const response = await routeAPI.post("auth/login", body);
  console.log(response);
  return response.data.token;
}

export async function fetchRegisterAPI(body) {
  const response = await routeAPI.post("auth/register", body);
  console.log(response);
  return response.data;
}

export async function fetchRegisterPlantAPI(body) {
  const response = await routeAPI.post("planta", body);
  console.log(response);
  return response.data;
}

export async function fetchPlanta() {
  const resultP = await routeAPI.get("planta");
  console.log(resultP);

  return resultP.data;
}

export async function fetchObservationAPI(body) {
  const response = await routeAPI.post("observacion", body);
  console.log(response);
  return response.data;
}

export async function fetchObtainObservationAPI() {
  const response = await routeAPI.get("observacion");
  console.log(response);
  return response.data;
}

export async function fetchSendImage(body) {
  const response = await routeAPI.post("files", body);
  console.log(response);
  return response.data;
}

export async function fetchUnicaPlanta(planta) {
  const resultP = await routeAPI.get(`planta/${planta}`);
  console.log(resultP);

  return resultP.data;
}

export async function eliminarPlant(id) {
  const response = await routeAPI.delete(`planta/${id}`);
  console.log(response);
  return response.data;
}
