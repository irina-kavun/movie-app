import { TYPES } from "./types";
import { all, put, delay, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getTotalMovies,
  getMoviesSuccess,
  getMoviesError,
  getLiveSearchMoviesSuccess,
  getLiveSearchMoviesError,
} from "./actions";
import { setSearchFilters } from "../Search/actions";
import api from "../../api";

function* watchGetMovies() {
  yield takeEvery(TYPES.GET_MOVIES, getMoviesSaga);
  yield takeLatest(TYPES.GET_LIVESEARCH_MOVIES, getLiveSearchMoviesSaga);
}

function* getMoviesSaga(action) {
  try {
    const { params } = action;

    const response = yield api.getMovies({ params: { ...params } });
    if (response.data.Error) {
      throw new Error(response.data.Error);
    }

    const data = response.data.Search;
    const totalMovies = response.data.totalResults;
    yield all([put(getMoviesSuccess(data)), put(getTotalMovies(totalMovies))]);
  } catch (e) {
    yield put(getMoviesError());
  }
}

function* getLiveSearchMoviesSaga(action) {
  const { params } = action;
  try {
    yield delay(400);

    const response = yield api.getMovies({ params: { ...params } });
    if (response.data.Error) {
      throw new Error(response.data.Error);
    }

    const data = response.data.Search;
    yield all([
      put(getLiveSearchMoviesSuccess(data)),
      put(setSearchFilters(params)),
    ]);
  } catch (e) {
    yield all([put(getLiveSearchMoviesError()), put(setSearchFilters(params))]);
  }
}

export default watchGetMovies;
