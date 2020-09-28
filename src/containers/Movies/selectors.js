export const selectMovies = (state) => state.moviesReducer.movies;
export const selectLiveSearchMovies = (state) =>
  state.moviesReducer.liveSearchMovies;
export const selectLoadingMovies = (state) => state.moviesReducer.loading;
export const selectTotalMovies = (state) => state.moviesReducer.totalMovies;
