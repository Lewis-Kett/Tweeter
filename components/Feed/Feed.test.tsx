import { render, screen } from "@testing-library/react";
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
});
