import { render, screen, act } from "@testing-library/react";
import { Comment } from "./Comment";
import { mockComment } from "../../utils/mockData";

describe("Comment", () => {
  it("renders a profile image", () => {
    render(<Comment comment={mockComment} />);

    const profileImage = screen.getByAltText("avatar image");

    expect(profileImage).toBeInTheDocument;
  });

  it("renders a username", () => {
    render(<Comment comment={mockComment} />);

    const username = screen.getByText("Example");

    expect(username).toBeInTheDocument;
  });

  it("renders a modified handle", () => {
    render(<Comment comment={mockComment} />);

    const handle = screen.getByText("@example ·");

    expect(handle).toBeInTheDocument;
  });

  it("renders the time when the tweet was posted", async () => {
    render(<Comment comment={mockComment} />);

    const timePosted = screen.getByTestId("time-ago");

    expect(timePosted).toBeInTheDocument;
  });

  it("renders the comment text", async () => {
    render(<Comment comment={mockComment} />);

    const text = screen.getByText("This is a test comment");

    expect(text).toBeInTheDocument;
  });
});
