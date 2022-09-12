import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Widgets } from "./Widgets";

describe("Widgets", () => {
  it("renders an search input", () => {
    render(<Widgets />);

    const searchInput = screen.getByPlaceholderText("Search Tweeter");
    
    expect(searchInput).toBeInTheDocument;
  });

  it("should not have any voilations", async () => {
    const {container} = render(<Widgets />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
