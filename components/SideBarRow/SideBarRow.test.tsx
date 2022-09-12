import { render, screen } from "@testing-library/react";
import { SideBarRow } from "./SideBarRow";
import { UserIcon } from "@heroicons/react/outline";
import { axe } from "jest-axe";

describe("SideBarRow", () => {
  it("renders an Icon", () => {
    render(<SideBarRow Icon={UserIcon} title="user" />);

    const Icon = screen.getByTestId("rowIcon");

    expect(Icon).toBeInTheDocument;
  });

  it("renders a title", () => {
    render(<SideBarRow Icon={UserIcon} title="user" />);

    const title = screen.getByText("user");

    expect(title.textContent).toEqual("user");
  });

  it("should not have any voilations", async () => {
    const { container } = render(<SideBarRow Icon={UserIcon} title="user" />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
