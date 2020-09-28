import React from "react";
import { useGetMovieDetails } from "./hooks/useGetMovieDetails";
import MovieItemDetails from "../../components/MovieItemDetails";
import Loader from "../../components/Loader";

const MovieDetails = () => {
  const { movieItem, loading } = useGetMovieDetails();

  return (
    <div className="movieDetails">
      {loading ? <Loader /> : <MovieItemDetails movie={movieItem} />}
    </div>
  );
};

export default MovieDetails;
