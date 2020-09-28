import axios from "axios";
import { BASE_URL } from "../constants/api";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => {
    return Object.entries(Object.assign({}, params))
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  },
});

export default {
  getMovies: ({ params }) =>
    instance({
      method: "GET",
      params: { ...params },
    }),
  getSingleMovie: (id) =>
    instance({
      method: "GET",
      params: { i: id },
    }),
};
