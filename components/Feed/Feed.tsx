import React, { useState } from "react";
import { RefreshIcon } from "@heroicons/react/outline";
import { TweetBox } from "../TweetBox";
import { Tweet } from "../Tweet";
import { TweetType } from "../../typings";
import { fetchTweets } from "../../utils/client/fetchTweets";
import toast from "react-hot-toast";

interface FeedProps {
  tweets?: TweetType[];
}

export const Feed = ({ tweets: tweetsProp }: FeedProps) => {
  const [tweets, setTweets] = useState(tweetsProp);

  const refreshTweets = async () => {
    const refreshToast = toast.loading("Refreshing...");

    const newTweets: TweetType[] = await fetchTweets();
    setTweets(newTweets);

    toast.success("Feed updated", {
      id: refreshToast,
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          className="mr-5 mt-5 h-8 w-8 cursor-pointer 
          text-twitter transition-all duration-500 ease-out 
          hover:rotate-180 active:scale-125"
          data-testid="refresh"
          onClick={refreshTweets}
        />
      </div>
      <div>
        <TweetBox setTweets={setTweets} />
      </div>
      <div>
        {tweets &&
          tweets.map((tweet) => <Tweet key={tweet._id} tweet={tweet} />)}
      </div>
    </div>
  );
};
