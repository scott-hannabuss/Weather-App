import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    setSearchText: () => {},
    onSubmit: () => {},
    searchText: "Liverpool",
  };

  it("renders correctly", () => {
    const { asFragment } = render(<SearchForm {...validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
