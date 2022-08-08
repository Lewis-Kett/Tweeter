import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TweetBox } from "./TweetBox";

describe("TweetBox", () => {
  it("renders an search input", () => {
    render(<TweetBox />);

    const placeholderProfileImg = screen.getByAltText(
      "placeholder profile image"
    );

    expect(placeholderProfileImg).toHaveAttribute(
      "src",
      "https://links.papareact.com/gll"
    );
  });

  it("shoul have five icons", () => {
    render(<TweetBox />);

    const tweetIcons = screen.getAllByTestId("tweet-icon");

    expect(tweetIcons.length).toBe(5);
  });

  it("should disable button when no value is entered", () => {
    render(<TweetBox />);

    const tweetButton = screen.getByText("Tweet");

    expect(tweetButton).toHaveAttribute("disabled");
  });

  it("should enable the button when value is entered", async () => {
    userEvent.setup();

    render(<TweetBox />);

    const tweetBox = screen.getByPlaceholderText("What's Happening?");

    await userEvent.type(tweetBox, "some text");

    const tweetButton = screen.getByText("Tweet");
    expect(tweetButton).not.toHaveAttribute("disabled");
  });
});
