import { combineReducers } from "redux";
import moviesReducer from "./containers/Movies/reducer";
import searchReducer from "./containers/Search/reducer";
import movieItemReducer from "./containers/MovieDetails/reducer";

export default combineReducers({
  moviesReducer,
  searchReducer,
  movieItemReducer,
});
