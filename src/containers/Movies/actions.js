import { TYPES } from "./types";

export const getMovies = (params) => ({
  type: TYPES.GET_MOVIES,
  params,
});

export const getMoviesSuccess = (payload) => ({
  type: TYPES.GET_MOVIES_SUCCESS,
  payload,
});

export const getMoviesError = () => ({
  type: TYPES.GET_MOVIES_ERROR,
});

export const getTotalMovies = (payload) => ({
  type: TYPES.GET_TOTAL_MOVIES,
  payload,
});

export const getLiveSearchMovies = (params) => ({
  type: TYPES.GET_LIVESEARCH_MOVIES,
  params,
});

export const getLiveSearchMoviesSuccess = (payload) => ({
  type: TYPES.GET_LIVESEARCH_MOVIES_SUCCESS,
  payload,
});

export const getLiveSearchMoviesError = () => ({
  type: TYPES.GET_LIVESEARCH_MOVIES_ERROR,
});
