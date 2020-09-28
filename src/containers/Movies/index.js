import React from "react";
import Slider from "../../components/Slider";
import SearchBar from "../../components/SearchBar";

import "./styles.scss";
import Container from "../../components/Grid/Container";
import Wrapper from "../../components/Wrapper";
import { useGetMovies } from "./hooks/useGetMovies";
import MovieItem from "../../components/MovieItem";
import { setSearchFilters, setLiveSearchFilters } from "../Search/actions";
import { useGetLiveSearchMovies } from "./hooks/useGetLiveSearchMovies";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";

export default () => {
  const { movies, loading, inputFiltersParams } = useGetMovies();
  const { liveSearchMovies } = useGetLiveSearchMovies();

  return (
    <Wrapper>
      <Slider />
      <Container>
        <h1 className="homepage-title">Explore movies & series</h1>
        <SearchBar
          onChange={setLiveSearchFilters}
          onKeyDown={setSearchFilters}
          name="s"
          value={inputFiltersParams}
        />
        <div className="homepage-movies">
          {loading ? (
            <Loader />
          ) : (
            movies.map((item) => <MovieItem key={item.imdbID} movie={item} />)
          )}
        </div>
        <Pagination />
      </Container>
    </Wrapper>
  );
};
