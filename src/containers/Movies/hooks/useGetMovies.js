import { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../actions";
import { selectMovies, selectLoadingMovies } from "../selectors";
import { selectFilters } from "../../Search/selectors";

export const useGetMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const filtersParams = useSelector(selectFilters);
  const inputFiltersParams = useSelector(selectFilters);
  const loading = useSelector(selectLoadingMovies);

  const fetchMovies = useCallback(() => {
    dispatch(getMovies(filtersParams));
  }, [dispatch, filtersParams]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return useMemo(
    () => ({
      movies,
      inputFiltersParams,
      loading,
    }),
    [movies, loading, inputFiltersParams]
  );
};
