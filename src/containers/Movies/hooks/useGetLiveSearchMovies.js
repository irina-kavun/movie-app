import { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLiveSearchFilters } from "../../Search/selectors";
import { selectLiveSearchMovies } from "../selectors";
import { getLiveSearchMovies } from "../actions";

export const useGetLiveSearchMovies = () => {
  const dispatch = useDispatch();
  const liveSearchFilters = useSelector(selectLiveSearchFilters);
  const liveSearchMovies = useSelector(selectLiveSearchMovies);

  const fetchLiveSearchMovies = useCallback(() => {
    dispatch(getLiveSearchMovies(liveSearchFilters));
  }, [dispatch, liveSearchFilters]);

  useEffect(() => {
    fetchLiveSearchMovies();
  }, [fetchLiveSearchMovies]);

  return useMemo(() => ({ liveSearchMovies }), [liveSearchMovies]);
};
