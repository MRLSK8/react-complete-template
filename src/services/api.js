import axios from 'axios';

import { getUser } from './auth';

export const baseURL = 'http://localhost:3333';

export const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${getUser()?.token}`,
  },
});

export const fetcher = (path) =>
  api
    .get(path)
    .then((response) => response.data)
    .catch((err) => {
      throw new Error({ Error: err });
    });
