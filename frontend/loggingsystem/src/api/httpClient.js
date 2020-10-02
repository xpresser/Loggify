import axios from "axios";

const authRequestAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: { Authorization: localStorage.getItem("token") },
});

export default authRequestAxios;
