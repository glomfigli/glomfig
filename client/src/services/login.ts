import axios from "axios";

const baseUrl = "/api";
const login = async (credentials: { username: string, password: string }):
Promise<IUser> => {
  const response = await axios.post(
    `${baseUrl}/sessions`,
    credentials,
    { withCredentials: true }
  );
  window.localStorage.setItem("userToken", response.data.authenticationToken);
  return response.data.user as IUser;
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
  configs: string[]
}

export default { login, fetchCurrent };
