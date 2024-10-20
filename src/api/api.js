import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000"; //"https://backend-for-phone-book.onrender.com";
axios.defaults.withCredentials = true;

export const setAuthHeader = (persistedToken) => {
  axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export default axios;
