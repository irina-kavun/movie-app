import {useCallback} from 'react';
import {useSelector} from "react-redux";
import {selectTotalMovies} from '../selectors';
import {selectCurrentPage} from '../../Search/selectors'
import {setPrevPage, setNextPage, setDefaultPage} from '../../Search/actions'

export const useGetPagination = () => {
  const totalMovies = useSelector(selectTotalMovies);
const currentPage = useSelector(selectCurrentPage);


  return ();
};
