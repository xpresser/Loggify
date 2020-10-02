import axios from "axios";

export const signIn = async ({ username, password }) => {
  const res = await axios.post("http:/localhost:8080/api/v1/auth/signin", {
    username,
    password,
  });

  const { token } = res.data;
  axios.defaults.headers["Authorization"] = `${token}`;
  localStorage.setItem("token", token);

  return res.data;
};

export const signUp = async ({
  fullName,
  username,
  email,
  password,
  userPosition,
}) => {
  const res = await axios.post("http:/localhost:8080/api/v1/auth/signup", {
    fullName,
    username,
    email,
    password,
    userPosition,
  });

  return res.data;
};

export const signOut = async () => {
  const res = await axios.post("http:/localhost:8080/api/v1/auth/signout");

  return res;
};
