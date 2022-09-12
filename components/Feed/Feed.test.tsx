import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Feed } from "./Feed";

describe("Feed", () => {
  it("renders an heading", () => {
    render(<Feed />);

    const heading = screen.getByText("Home");
        
    expect(heading).toBeInTheDocument;
  });

  it("renders an refresh button", () => {
    render(<Feed />);

    const refresh = screen.getByTestId("refresh");
        
    expect(refresh).toBeInTheDocument;
  });

  it("should not have any voilations", async () => {
    const {container} = render(<Feed />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
