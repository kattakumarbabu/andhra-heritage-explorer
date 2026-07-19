import axios from "axios";

const api = axios.create({
  baseURL: "https://andhra-heritage-explorer.onrender.com/api",
});

export default api;