import { render, screen } from "@testing-library/react";
import { SearchInput } from "./SearchInput";

describe("SearchInput", () => {
  it("renders an search input", () => {
    render(<SearchInput/>);

    const searchInput = screen.getByPlaceholderText("Search Tweeter");
    
    expect(searchInput).toBeInTheDocument;
  });

  it("renders an search icon", () => {
    render(<SearchInput/>);

    const Icon = screen.getByTestId("searchIcon");
    
    expect(Icon).toBeInTheDocument;
  });
});
