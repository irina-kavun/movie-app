import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './styles.scss';

const SearchDropdownItem = ({ movie: { Title, Type, Poster, Year, imdbID } }) => {
   const itemLink = `/movies/${imdbID}`

    return(
        <div className="searchItem">
            <div className="searchItem__imgWrap">
                    <img className="searchItem__image" src={Poster} alt={Title} />
            </div>
            <div className="searchItem__group">
                    <h2 className="searchItem__option">
                        Title:
                        <Link to={itemLink} className="searchItem__title">
                            {Title}
                        </Link>
                    </h2>
                    <div className="searchItem__option">
                        <span>Type:</span>
                        <strong className="searchItem__detail">{Type}</strong>
                    </div>
                    <div className="searchItem__option">
                        <span>Year:</span>
                        <strong className="searchItem__detail">{Year}</strong>
                    </div>
            </div>
        </div>
    )
}

SearchDropdownItem.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Type: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        imdbID: PropTypes.string.isRequired,
    }).isRequired,
};

export default SearchDropdownItem;