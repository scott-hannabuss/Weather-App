import React from "react";
import PropTypes from "prop-types";
import "../styles/LocationDetails.css";

const LocationDetails = (props) => {
  const { city, errorMessage } = props;
  return errorMessage ? (
    <h1 className="error-message">{errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`${city}`}</h1>
  );
};

LocationDetails.defaultProps = {
  errorMessage: "",
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default LocationDetails;
