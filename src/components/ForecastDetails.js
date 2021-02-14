import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, wind, humidity } = forecast;
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__min-temperature">
        Min temp:
        {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__max-temperature">
        Max temp:
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__humidity">
        Humidity:
        {humidity}
        &#17;
      </div>
      <div className="forecast-details__wind-speed">
        Wind speed:
        {wind.speed}
        mph
      </div>
      <div className="forecast-details__wind-direction">
        Wind direction:
        {wind.direction}
      </div>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
