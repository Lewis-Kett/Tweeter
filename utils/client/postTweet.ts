import { TweetBody } from "../../typings";

export const postTweet = async (tweet: TweetBody) => {
  const result = await fetch(`/api/tweet`, {
    headers: { "content-type": "application/json" },
    body: JSON.stringify(tweet),
    method: "POST",
  });

  const json = await result.json();

  return json;
};
