import axios from "axios";

const BASE_URL: string = import.meta.env.VITE_API_BASE;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
