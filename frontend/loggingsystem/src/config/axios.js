import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers["Authorization"] = token;
  localStorage.setItem("token", token);
}
