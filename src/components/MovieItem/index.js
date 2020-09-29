import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import PropTypes from "prop-types";

const MovieItem = ({ movie: { Title, Type, Year, Poster, imdbID } }) => {

    return (
    <div className="movieItem">
      <img src={Poster} alt={Title} />
      <Link className="movieItem__link" to={`/movies/${imdbID}`}>
        <div className="movieItem__details">
          <p>{Title}</p>
          <div className="movieItem__options">
            <span>{Year}</span>
            <span>{Type}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

MovieItem.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Type: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        imdbID: PropTypes.string.isRequired,
    }).isRequired,
};

export default MovieItem;
