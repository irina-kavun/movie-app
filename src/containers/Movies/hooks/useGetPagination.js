import {useCallback} from 'react';
import {useSelector} from "react-redux";
import {selectTotalMovies} from '../selectors';
import {selectCurrentPage} from '../../Search/selectors'
import {calcPageItems, checkTotalMovies, checkFirstPage} from "../../../helpers/paginationCalc";

export const useGetPagination = () => {
  const totalMovies = useSelector(selectTotalMovies);
const currentPage = useSelector(selectCurrentPage);

const calculateItemsPerPage = useCallback(() => {
  return calcPageItems(currentPage, totalMovies)
}, [currentPage, totalMovies])

const checkTotalMoviesOnPage = useCallback(() => {
  return checkTotalMovies(currentPage, totalMovies)
}, [currentPage, totalMovies])
  const checkIfFirstPage = useCallback(()=> {
    return checkFirstPage(currentPage)
  },[currentPage])

  return {calculateItemsPerPage, checkTotalMoviesOnPage, checkIfFirstPage};
};
