import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    onInputChange: () => {},
    onSubmit: () => {},
    searchInput: "Liverpool",
  };

  it("renders correctly", () => {
    const { asFragment } = render(<SearchForm {...validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
