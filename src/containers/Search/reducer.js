import { TYPES } from "./types";

const initialState = {
  filters: { page: 1 },
  liveSearchFilters: {},
};

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_SEARCH_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...payload },
      };
    case TYPES.SET_LIVESEARCH_FILTERS:
      return {
        ...state,
        liveSearchFilters: { ...state.liveSearchFilters, ...payload },
      };
    case TYPES.SET_NEXT_PAGE:
      return {
        ...state,
        filters: { ...state.filters, page: state.filters.page + 1 },
      };
    case TYPES.SET_PREV_PAGE:
      return {
        ...state,
        filters: { ...state.filters, page: state.filters.page - 1 },
      };
    case TYPES.SET_DEFAULT_PAGE:
      return {
        ...state,
        filters: { ...state.filters, page: 1 },
      };
    default:
      return state;
  }
};

export default searchReducer;
