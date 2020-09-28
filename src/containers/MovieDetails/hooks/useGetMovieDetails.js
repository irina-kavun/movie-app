import { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMovieItem, selectLoadingMovieItem } from "../selectors";
import { getMovieDetails } from "../actions";

export const useGetMovieDetails = () => {
  const dispatch = useDispatch();
  const movieItem = useSelector(selectMovieItem);
  const loading = useSelector(selectLoadingMovieItem);
  const { id } = useParams();

  const fetchMovieItem = useCallback(
    (id) => {
      dispatch(getMovieDetails(id));
    },
    [dispatch]
  );

  useEffect(() => {
    fetchMovieItem(id);
  }, [fetchMovieItem, id]);

  return useMemo(
    () => ({
      movieItem,
      loading,
    }),
    [movieItem, loading]
  );
};
