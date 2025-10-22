import axios from "axios";

export const api = axios.create({
  baseURL: "https://observant-stillness-production-ba62.up.railway.app/",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("x-auth-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
