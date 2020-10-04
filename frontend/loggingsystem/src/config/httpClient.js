import axios from "axios";
import { REACT_APP_API_URL } from "src/constants/mainConstants";

const httpClient = axios.create({
  headers: { "Access-Control-Allow-Origin": "*" },
  baseURL: REACT_APP_API_URL,
});

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers["Authorization"] = token;
}

/* Setting an interceptor so that if (ONLY IF) a jwt is present
  an authorization header with the token value will be set with every request
  (it modifies the request by modifying its headers before sending the request).
*/

const jwtToken = localStorage.getItem("token");

httpClient.interceptors.request.use(
  function (config) {
    if (jwtToken) {
      config.headers["Authorization"] = jwtToken;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default httpClient;
