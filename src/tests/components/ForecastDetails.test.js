import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 11111111,
    humidity: 80,
    temperature: {
      min: 5,
      max: 30,
    },
    wind: {
      speed: 30,
      direction: "sw",
    },
  };

  it("renders as expected", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
