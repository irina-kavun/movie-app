import { TYPES } from "./types";
import { put, takeEvery } from "redux-saga/effects";
import { getMovieDetailsSuccess, getMovieDetailsError } from "./actions";
import api from "../../api";

function* watchGetMovieDetails() {
  yield takeEvery(TYPES.GET_MOVIE_DETAILS, getMovieDetailsSaga);
}

function* getMovieDetailsSaga(action) {
  try {
    const { id } = action;
    const response = yield api.getSingleMovie(id);
    if (response.data.Error) {
      throw new Error(response.data.Error);
    }
    const data = response.data;
    yield put(getMovieDetailsSuccess(data));
  } catch (e) {
    yield put(getMovieDetailsError());
  }
}

export default watchGetMovieDetails;
