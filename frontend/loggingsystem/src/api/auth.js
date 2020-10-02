import httpClient from "./httpClient";

export const signIn = async ({ username, password }) => {
  const res = await httpClient.post("/auth/signin", {
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
  const res = await httpClient.post("/auth/signup", {
    fullName,
    username,
    email,
    password,
    userPosition,
  });

  return res.data;
};

export const signOut = async () => {
  const res = await httpClient.post("auth/signout");

  return res;
};
