import { render, screen } from "@testing-library/react";
import { SideBarRow } from "./SideBarRow";

describe("SideBarRow", () => {
  it("renders a SideBarRow", () => {
    render(<SideBarRow />);

    const heading = screen.getByRole("heading", {
      name: "Side bar row",
    });

    expect(heading).toBeInTheDocument();
  });
});
