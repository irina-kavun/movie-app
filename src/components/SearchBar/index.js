import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import Button from "../Button";
import "./styles.scss";

const Search = ({ onKeyDown, onChange, value, ...params }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(value);

  const changeValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ [name]: value });
  };
  const handleOnKeyDown = (event) => {
    // event.persist();
    const key = event.key;
    if (key === "Enter") {
      const name = event.target.name;
      const value = event.target.value;
      dispatch(onKeyDown({ [name]: value }));
    }
  };

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    changeValue(event);
    dispatch(onChange({ [name]: value }));
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        {...params}
        placeholder="Search..."
        onKeyDown={handleOnKeyDown}
        onChange={handleOnChange}
        value={state.s || ""}
      />
      <Button className="search-button" title={<SearchIcon />} />
    </div>
  );
};

export default Search;
