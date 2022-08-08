import React, { useState } from "react";
import {
  SearchCircleIcon,
  EmojiHappyIcon,
  CalendarIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";

export const TweetBox = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src="https://links.papareact.com/gll"
        alt="placeholder profile image"
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            type="text"
            placeholder="What's Happening?"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon data-testid="tweet-icon" className="tweet-box-icon h-5 w-5" />
              <SearchCircleIcon data-testid="tweet-icon" className="tweet-box-icon h-5 w-5" />
              <EmojiHappyIcon data-testid="tweet-icon" className="tweet-box-icon h-5 w-5" />
              <CalendarIcon data-testid="tweet-icon" className="tweet-box-icon h-5 w-5" />
              <LocationMarkerIcon data-testid="tweet-icon" className="tweet-box-icon h-5 w-5"/>
            </div>
            <button
              disabled={!input}
              className="rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
