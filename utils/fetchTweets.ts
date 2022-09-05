import { TweetType } from "../typings";

export const fetchTweets= async () => {
  const res = await fetch(`/api/tweet`);

  const tweets: TweetType[] = await res.json();
  
  return tweets;
};
