import { all } from "redux-saga/effects";
import watchGetMovies from "./containers/Movies/sagas";
import watchGetMovieDetails from "./containers/MovieDetails/sagas";

export default function* rootSaga() {
  yield all([watchGetMovies(), watchGetMovieDetails()]);
}
