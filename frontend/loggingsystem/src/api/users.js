import axios from "axios";
import { REACT_APP_API_URL } from "src/constants/mainConstants";

export const getCurrentUser = async (username) => {
  const rest = await axios.get(`${REACT_APP_API_URL}/api/v1/users/${username}`);
  return rest.data;
};
