import { TYPES } from "./types";

export const getMovieDetails = (id) => ({
  type: TYPES.GET_MOVIE_DETAILS,
  id,
});

export const getMovieDetailsSuccess = (payload) => ({
  type: TYPES.GET_MOVIE_DETAILS_SUCCESS,
  payload,
});

export const getMovieDetailsError = () => ({
  type: TYPES.GET_MOVIE_DETAILS_ERROR,
});
