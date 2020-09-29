import { TYPES } from "./types";

const initialState = {
  movies: [],
  liveSearchMovies: [],
  loading: false,
  totalMovies: 0,
};

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.GET_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: payload,
        loading: false,
      };
    case TYPES.GET_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        totalMovies: 0,
      };
    case TYPES.GET_TOTAL_MOVIES:
      return {
        ...state,
        totalMovies: Number(payload),
      };
    case TYPES.GET_LIVESEARCH_MOVIES:
      return {
        ...state,
      };
    case TYPES.GET_LIVESEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        liveSearchMovies: payload,
      };
    case TYPES.GET_LIVESEARCH_MOVIES_ERROR:
      return {
        ...state,
        liveSearchMovies: [],
      };
    default:
      return state;
  }
};

export default moviesReducer;
