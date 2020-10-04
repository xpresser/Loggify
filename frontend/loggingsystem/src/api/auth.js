import httpClient from "src/config/httpClient";
import { REACT_APP_API_URL } from "src/constants/mainConstants";

export const signIn = async ({ username, password }) => {
  return await httpClient.post(`${REACT_APP_API_URL}/api/v1/auth/signin`, {
    username,
    password,
  });
};

export const signUp = async ({ fullName, username, email, password }) => {
  const res = await httpClient.post(`${REACT_APP_API_URL}/api/v1/auth/signup`, {
    fullName,
    username,
    email,
    password,
  });

  console.log(fullName, username, email, password);

  return res.data;
};

export const signOut = async () => {
  const res = await httpClient.post(`${REACT_APP_API_URL}/api/v1/auth/signout`);

  return res;
};
