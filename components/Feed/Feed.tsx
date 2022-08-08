import React from "react";
import { RefreshIcon } from "@heroicons/react/outline";
import { TweetBox } from "../TweetBox";

interface FeedProps {}

export const Feed = ({}: FeedProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          className="mr-5 mt-5 h-8 w-8 cursor-pointer 
          text-twitter transition-all duration-500 ease-out 
          hover:rotate-180 active:scale-125"
          data-testid="refresh"
        />
      </div>
      <div>
        <TweetBox />
      </div>
    </div>
  );
};
