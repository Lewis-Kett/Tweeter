import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { SideBar } from "./SideBar";

describe("SideBar", () => {
  it("renders a brand image", () => {
    render(<SideBar />);

    const brandImage = screen.getByRole("img");

    expect(brandImage).toHaveProperty("src", "https://links.papareact.com/drq");
  });

  it("should not have any voilations", async () => {
    const {container} = render(<SideBar />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
