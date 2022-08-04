import { render, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";

describe("SideBar", () => {
  it("renders a brand image", () => {
    render(<SideBar />);

    const brandImage = screen.getByRole("img");

    expect(brandImage).toHaveProperty("src", "https://links.papareact.com/drq");
  });
});
