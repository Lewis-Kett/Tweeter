import { render, screen } from "@testing-library/react";
import { Widgets } from "./Widgets";

describe("Widgets", () => {
  it("renders an search input", () => {
    render(<Widgets />);

    const searchInput = screen.getByPlaceholderText("Search Tweeter");
    
    expect(searchInput).toBeInTheDocument;
  });
});
