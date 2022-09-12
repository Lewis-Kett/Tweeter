import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { SearchInput } from "./SearchInput";

describe("SearchInput", () => {
  it("renders an search input", () => {
    render(<SearchInput />);

    const searchInput = screen.getByPlaceholderText("Search Tweeter");

    expect(searchInput).toBeInTheDocument;
  });

  it("renders an search icon", () => {
    render(<SearchInput />);

    const Icon = screen.getByTestId("searchIcon");

    expect(Icon).toBeInTheDocument;
  });

  it("should not have any voilations", async () => {
    const { container } = render(<SearchInput />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
