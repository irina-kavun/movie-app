import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import SearchIcon from "@material-ui/icons/Search";
import Button from "../Button";
import "./styles.scss";


const SearchBar = ({ onKeyDown, onChange, resetPage, value, openLiveSearchDropdown, ...params }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(value);

  const changeValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ [name]: value });
  };
  const handleOnKeyDown = (event) => {
    const key = event.key;
    if (key === "Enter") {
      const name = event.target.name;
      const value = event.target.value;
      dispatch(resetPage());
      dispatch(onKeyDown({ [name]: value }));
    }
  };
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    changeValue(event);
    dispatch(resetPage());
    dispatch(onChange({ [name]: value }));
  };

  const handleOnFocus = () => dispatch(openLiveSearchDropdown());

  return (
    <div className="search-container">
      <input
        className="search-input"
        {...params}
        placeholder="Search..."
        onKeyDown={handleOnKeyDown}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        autoComplete="off"
        value={state.s || ""}
      />
      <Button className="search-button" title={<SearchIcon />} />
    </div>
  );
};

SearchBar.propTypes = {
  onKeyDown: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  resetPage: PropTypes.func.isRequired,
  value: PropTypes.shape({
    page: PropTypes.number.isRequired,
    s: PropTypes.string.isRequired,
  }).isRequired,
  openLiveSearchDropdown: PropTypes.func.isRequired,
};

export default SearchBar;
