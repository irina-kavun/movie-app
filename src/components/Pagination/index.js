import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {setPrevPage, setNextPage} from '../../containers/Search/actions';
import {useGetPagination} from '../../containers/Movies/hooks/useGetPagination';
import {selectTotalMovies} from '../../containers/Movies/selectors'
import Button from "../Button";
import './styles.scss';


const Pagination = () => {
    const dispatch = useDispatch();
  const totalMovies = useSelector(selectTotalMovies);
  const {calculateItemsPerPage, checkTotalMoviesOnPage, checkIfFirstPage} = useGetPagination();

  return (
      <>
        <div className="pagination">
          <p className="pagination__items">
            Items per page: 10
          </p>
          <div className="pagination__buttonGroup">
            <Button
                className="pagination__buttonPrev"
                disabled={checkIfFirstPage()}
                title={calculateItemsPerPage()}
                onClick={() => dispatch(setPrevPage())}
            />

            <Button
                className="pagination__buttonNext"
                disabled={checkTotalMoviesOnPage()}
                title={totalMovies}
                onClick={() => dispatch(setNextPage())}
            />
          </div>
        </div>
      </>
      )
};

export default Pagination;
