import axios from "axios";

const api = axios.create({
  baseURL: "https://online-book-store-2gt3.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;