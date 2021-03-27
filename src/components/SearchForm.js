import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <h1 className="header">React Weather App</h1>
      <input
        className="input"
        type="text"
        placeholder="Enter UK City"
        onChange={handleInputChange}
        value={searchText}
      />
      <button className="search-button" type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
