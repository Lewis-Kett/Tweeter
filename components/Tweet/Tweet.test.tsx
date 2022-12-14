import { render, screen, act } from "@testing-library/react";
import { Tweet } from "./Tweet";
import { mockComment, mockTweet } from "../../utils/mockData";
import { fetchComments } from "../../utils/client";
import { axe } from "jest-axe";

jest.mock("../../utils/client/fetchComments");

beforeEach(() => {
  (fetchComments as jest.Mock).mockResolvedValue(mockComment);
});

describe("Tweet", () => {
  it("renders a profile image", async () => {
    await act(async () => {
      render(<Tweet tweet={mockTweet} />);
    });

    const profileImage = screen.getByAltText("profile image");

    expect(profileImage).toBeInTheDocument;
  });

  it("renders an @username", async () => {
    await act(async () => {
      render(<Tweet tweet={mockTweet} />);
    });

    const twitterHanlde = screen.getByText("@example ·");

    expect(twitterHanlde).toBeInTheDocument;
  });

  it("renders an username", async () => {
    await act(async () => {
      render(<Tweet tweet={mockTweet} />);
    });

    const twitterUsername = screen.getByText("Example");

    expect(twitterUsername).toBeInTheDocument;
  });

  it("renders the time when the tweet was posted", async () => {
    await act(async () => {
      render(<Tweet tweet={mockTweet} />);
    });

    const timePosted = screen.getByTestId("time-ago");

    expect(timePosted).toBeInTheDocument;
  });

  it("renders the tweet image", async () => {
    await act(async () => {
      render(<Tweet tweet={mockTweet} />);
    });

    const tweetImage = screen.getByAltText("tweet image");

    expect(tweetImage).toBeInTheDocument;
  });

  it("renders the 4 tweet controls", async () => {
    await act(async () => {
      render(<Tweet tweet={mockTweet} />);
    });

    const tweetImage = screen.getAllByTestId("tweet-controls");

    expect(tweetImage.length).toBe(4);
  });

  it("should not have any voilations", async () => {
    await act(async () => {
      render(<Tweet tweet={mockTweet} />);
    });

    const container = screen.getByTestId("container");
    
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
