import axios from "axios";

export const signIn = async ({ username, password }) => {
  const res = await axios.post("http://localhost:8080/v1/auth/signin", {
    username,
    password,
  });

  const { token } = res.data;
  axios.defaults.headers["Authorization"] = `${token}`;
  localStorage.setItem("token", token);

  return res.data;
};
