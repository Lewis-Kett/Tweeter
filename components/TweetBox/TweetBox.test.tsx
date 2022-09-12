import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { TweetBox } from "./TweetBox";

const setTweets = jest.fn();

describe("TweetBox", () => {
  it("renders an search input", () => {
    render(<TweetBox setTweets={setTweets} />);

    const placeholderProfileImg = screen.getByAltText(
      "placeholder profile image"
    );

    expect(placeholderProfileImg).toHaveAttribute(
      "src",
      "https://links.papareact.com/gll"
    );
  });

  it("shoul have five icons", () => {
    render(<TweetBox setTweets={setTweets} />);

    const tweetIcons = screen.getAllByTestId("tweetBox-icon");

    expect(tweetIcons.length).toBe(5);
  });

  it("should disable button when no value is entered", () => {
    render(<TweetBox setTweets={setTweets} />);

    const tweetButton = screen.getByText("Tweet");

    expect(tweetButton).toHaveAttribute("disabled");
  });

  it("should enable the button when value is entered", async () => {
    userEvent.setup();

    render(<TweetBox setTweets={setTweets} />);

    const tweetBox = screen.getByPlaceholderText("What's Happening?");

    await userEvent.type(tweetBox, "some text");

    const tweetButton = screen.getByText("Tweet");
    expect(tweetButton).not.toHaveAttribute("disabled");
  });

  it("should not have any voilations", async () => {
    const {container} = render(<TweetBox setTweets={setTweets} />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
