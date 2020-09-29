import React from "react";
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import Wrapper from "../Wrapper";
import Button from "../Button";

import "./styles.scss";
import Container from "../Grid/Container";
import PropTypes from "prop-types";

const video = "https://www.youtube.com/watch?v=DYYtuKyMtY8";

const MovieItemDetails = ({
  movie: { Title, Type, Year, Poster, Plot, Runtime, Genre, imdbRating },
}) => {

  const history = useHistory();
  const goBack = () => history.goBack();
  return (
    <Wrapper className="details">
      <Button className="details__button" title="Back" onClick={goBack} />
      <ReactPlayer
        className="details__player"
        light={true}
        controls={true}
        muted={true}
        width="100%"
        url={video}
      />
      <Container>
        <div className="details__descriptionBlock">
          <div className="details__imgBlock">
            <img src={Poster} alt={Title} />
            <div className="details__rating">
              <span className="details__ratingOption">IMDB Rating: </span>
              <span className="details__ratingOption">
                <span className="details__ratingOption--strong">
                  {imdbRating} /
                </span>
                10
              </span>
            </div>
          </div>

          <div className="details__options">
            <h1>{Title}</h1>
            <div className="details__description">
              <p>
                Runtime: <strong>{Runtime}</strong>
              </p>
              <p>
                Genre: <strong>{Genre}</strong>
              </p>
              <p>
                Year: <strong>{Year}</strong>
              </p>
              <p>
                Type: <strong>{Type}</strong>
              </p>
              <p className="details__plot">{Plot}</p>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

MovieItemDetails.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
    Runtime: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    imdbRating: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieItemDetails;
