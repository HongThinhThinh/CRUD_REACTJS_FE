import axios from "axios";
const baseURL = "http://localhost:8080/api/v1";
export const api = axios.create();

api.interceptors.request.use((config) => {
  config = {
    ...config,
    baseURL,
  };
  return config;
});
