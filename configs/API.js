import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

export const API_URL = 'https://www.freeskies.com/api';

const serverConfig = {
  baseURL: API_URL,
  responseType: 'json',
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
  validateStatus: function (status) {
    return status <= 500;
  },
};

const axiosCreate = axios.create(serverConfig);

export const useAxios = makeUseAxios({
  axios: axiosCreate,
});

export default axiosCreate;
