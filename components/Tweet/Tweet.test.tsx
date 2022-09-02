import { render, screen } from "@testing-library/react";
import { Tweet } from "./Tweet";
import { exampleTweet } from "../../utils/mockData/mockTweet"


describe("Tweet", () => {
  it("renders a profile image", () => {
    render(<Tweet tweet={exampleTweet}/>);

    const profileImage = screen.getByAltText("profile image");
        
    expect(profileImage).toBeInTheDocument;
  });

  it("renders an @username", () => {
    render(<Tweet tweet={exampleTweet}/>);

    const twitterHanlde = screen.getByText("@example ·");
        
    expect(twitterHanlde).toBeInTheDocument;
  });

  it("renders an username", () => {
    render(<Tweet tweet={exampleTweet}/>);

    const twitterUsername = screen.getByText("Example");
        
    expect(twitterUsername).toBeInTheDocument;
  });

  it("renders the time when the tweet was posted", () => {
    render(<Tweet tweet={exampleTweet}/>);

    const twitterHanlde = screen.getByTestId("time-ago");
        
    expect(twitterHanlde).toBeInTheDocument;
  });

  it("renders the tweet image", () => {
    render(<Tweet tweet={exampleTweet}/>);

    const tweetImage = screen.getByAltText("tweet image");
        
    expect(tweetImage).toBeInTheDocument;
  });

  it("renders the 4 tweet controls", () => {
    render(<Tweet tweet={exampleTweet}/>);

    const tweetImage = screen.getAllByTestId("tweet-controls");
        
    expect(tweetImage.length).toBe(4);
  });
});
