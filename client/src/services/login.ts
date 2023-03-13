import axios from "axios";

const baseUrl = "http://localhost:8080/api";
const login = async (credentials: { username: string, password: string }):
Promise<IUser> => {
  const response = await axios.post(
    `${baseUrl}/sessions`,
    credentials,
    { withCredentials: true }
  );
  return response.data as IUser;
};

const fetchCurrent = async (authToken: string): Promise<IUser> => {
  const response = await axios.get(
    `${baseUrl}/sessions/current`,
    { withCredentials: true }
  );

  return response.data as IUser;
};

export interface IUser {
  username: string
  password: string
}

export default { login, fetchCurrent };
