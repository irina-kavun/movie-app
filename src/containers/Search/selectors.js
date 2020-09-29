export const selectFilters = (state) => state.searchReducer.filters;
export const selectLiveSearchFilters = (state) =>
  state.searchReducer.liveSearchFilters;
export const selectCurrentPage = (state) => state.searchReducer.filters.page;
export const selectLiveSearchDropdown = (state) => state.searchReducer.searchDropdown;
