import React from "react";
import {useSelector, useDispatch} from "react-redux";

import Container from "../../components/Grid/Container";
import Wrapper from "../../components/Wrapper";
import { useGetMovies } from "./hooks/useGetMovies";
import MovieItem from "../../components/MovieItem";
import Slider from "../../components/Slider";
import SearchBar from "../../components/SearchBar";
import { setSearchFilters, setLiveSearchFilters, setDefaultPage, openSearchDropdown, closeSearchDropdown } from "../Search/actions";
import { useGetLiveSearchMovies } from "./hooks/useGetLiveSearchMovies";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import SearchDropdownItem from '../../components/SearchDropdownItem';
import BackPopup from '../../components/BackPopup';
import {selectLiveSearchDropdown} from "../Search/selectors";

import "./styles.scss";

export default () => {
    const dispatch = useDispatch();
  const { movies, loading, inputFiltersParams } = useGetMovies();
  const { liveSearchMovies } = useGetLiveSearchMovies();
  const liveSearchDropdown = useSelector(selectLiveSearchDropdown);

  return (
    <Wrapper>
        {
            liveSearchDropdown && <BackPopup openPopup={() => dispatch(closeSearchDropdown())}/>
        }
      <Slider />
      <Container>
        <h1 className="homepage-title">Explore movies & series</h1>
          <div className="homepage-liveSearchWrap">
        <SearchBar
          onChange={setLiveSearchFilters}
          onKeyDown={setSearchFilters}
          name="s"
          value={inputFiltersParams}
          resetPage={setDefaultPage}
          openLiveSearchDropdown={openSearchDropdown}
        />

        {liveSearchDropdown &&
            <div className="homepage-liveSearch">
              {liveSearchMovies.slice(0, 3).map((movie) => (
                  <SearchDropdownItem
                      onClick={(e) => console.log(e)}
                      key={movie.imdbID}
                      movie={movie}
                  />
              ))
              }
            </div>
        }
          </div>
        <div className="homepage-movies">
          {loading ? (
            <Loader />
          ) : (
            movies.map((item) => <MovieItem key={item.imdbID} movie={item} />)
          )}
        </div>
        {movies.length ? <Pagination /> : null}
          {!loading && !movies.length && <h2>Search Movies...</h2>}
      </Container>
    </Wrapper>
  );
};
