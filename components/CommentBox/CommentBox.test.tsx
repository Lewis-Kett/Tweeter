import {
  getAllByPlaceholderText,
  getByPlaceholderText,
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CommentBox } from "./CommentBox";

const handleSubmit = jest.fn(e => e.preventDefault());
const onChange = jest.fn();

describe("CommentBox", () => {
  it("Fires the event handler for submit", async () => {
    render(
      <CommentBox
        handleSubmit={handleSubmit}
        onChange={onChange}
        value="Comment"
      />
    );

    const sumbitButton = screen.getByText("Post");

    await userEvent.click(sumbitButton);

    expect(handleSubmit).toHaveBeenCalled();
  });

  it("Fires the event handler for onChange", async () => {
    render(
      <CommentBox
        handleSubmit={handleSubmit}
        onChange={onChange}
        value="Comment"
      />
    );

    const commentInput = screen.getByPlaceholderText("Write a comment...");

    await userEvent.type(commentInput, "another comment");

    expect(onChange).toHaveBeenCalled();
  });

  it("should disable the button when there is no value", () => {
    render(
      <CommentBox
        handleSubmit={handleSubmit}
        onChange={onChange}
        value=""
      />
    );

    const sumbitButton = screen.getByText("Post");

    expect(sumbitButton).toBeDisabled();
  });
});
