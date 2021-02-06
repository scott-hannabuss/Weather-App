import { render, screen } from "@testing-library/react";
import App from "../components/App";
const location = {
  city: "Manchester",
  country: "United Kingdom",
};

test("renders learn react link", () => {
  render(<App location={location} />);
  const linkElement = screen.getByText(/Manchester, United Kingdom/i);
  expect(linkElement).toBeInTheDocument();
});
