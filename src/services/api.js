import axios from 'axios';

export const baseURL = 'http://localhost:3333';

export const api = axios.create({
  baseURL,
});

export const fetcher = (path) => {
  return api.get(path).then((response) => {
    if (response.ok) {
      return response.data;
    } else {
      throw response.error;
    }
  });
};
