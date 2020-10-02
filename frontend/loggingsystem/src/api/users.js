import axios from "axios";

export const getMe = async () => {
  const res = await axios.get("/api/v1/users/me");
  return res.data;
};
