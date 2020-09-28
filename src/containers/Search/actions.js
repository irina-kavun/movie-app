import { TYPES } from "./types";

export const setSearchFilters = (payload) => ({
  type: TYPES.SET_SEARCH_FILTERS,
  payload,
});

export const setLiveSearchFilters = (payload) => ({
  type: TYPES.SET_LIVESEARCH_FILTERS,
  payload,
});

export const setPrevPage = () => ({
  type: TYPES.SET_PREV_PAGE,
});

export const setNextPage = () => ({
  type: TYPES.SET_NEXT_PAGE,
});

export const setDefaultPage = () => ({
  type: TYPES.SET_DEFAULT_PAGE,
});
