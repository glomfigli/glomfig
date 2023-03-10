import axios from "axios";

const baseUrl = "http://localhost:8080/api/users/";
const login = async (credentials: { username: string, password: string }):
Promise<IUser> => {
  const response = await axios.post(baseUrl, credentials);
  return response.data as IUser;
};

export interface IUser {
  username: string
  password: string
}

export default { login };
