import { TYPES } from "./types";

const initialState = {
  movie: {},
  loading: false,
};

const movieItemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.GET_MOVIE_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movie: payload,
        loading: false,
      };
    case TYPES.GET_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        movie: {},
        loading: false,
      };
    default:
      return state;
  }
};

export default movieItemReducer;
