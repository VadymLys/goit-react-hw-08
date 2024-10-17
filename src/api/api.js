import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

axios.defaults.withCredentials = true;

export const setAuthHeader = (persistedToken) => {
  axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export default axios;
