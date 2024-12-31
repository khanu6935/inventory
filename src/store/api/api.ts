import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "ngrok-skip-browser-warning": "1" },
});

export const SECURE_API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

SECURE_API.interceptors.request.use(
  (config) => {
    const unParsedToken = localStorage.getItem("access_token");
    if (unParsedToken) {
      const tokenData = JSON.parse(atob(unParsedToken.split(".")[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      if (tokenData.exp && tokenData.ex < currentTime) {
        localStorage.removeItem("access_token");
        localStorage.clear();
        console.log("token hase expired");
        window.location.href = "/auth/signin";
      } else {
        config.headers.Authorization = `Bearer ${unParsedToken}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
