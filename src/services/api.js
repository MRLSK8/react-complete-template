import axios from 'axios';

export const baseURL = 'http://localhost:3333';

export const api = axios.create({
  baseURL,
});

export const fetcher = (path) =>
  api
    .get(path)
    .then((response) => response.data)
    .catch((err) => {
      throw new Error({ Error: err });
    });
