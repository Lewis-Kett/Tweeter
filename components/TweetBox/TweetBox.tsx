import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  SearchCircleIcon,
  EmojiHappyIcon,
  CalendarIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { TweetBody, TweetType } from "../../typings";
import { fetchTweets, postTweet } from "../../utils/client";
import { toast } from "react-hot-toast";
import { ImageBox } from "../ImageBox";

interface TweetBoxProps {
  setTweets: Dispatch<SetStateAction<TweetType[] | undefined>>;
}

export const TweetBox = ({ setTweets }: TweetBoxProps) => {
  const [input, setInput] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const imageInputRef = useRef<HTMLInputElement>(null);

  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);

  const addimageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!imageInputRef.current?.value) return;

    setImage(imageInputRef.current.value);
    imageInputRef.current.value = "";
    setImageBoxOpen(false);
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const tweetBody: TweetBody = {
      text: input,
      username: "Test",
      profileImage:
        "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      image: image || "",
    };

    const result = await postTweet(tweetBody);

    const newTweets = await fetchTweets();
    setTweets(newTweets);

    toast("Tweet Posted", {
      icon: "🚀",
    });

    setInput("");
    setImage("");
    setImageBoxOpen(false);

    return result;
  };

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
              <PhotographIcon
                data-testid="tweetBox-icon"
                className="tweetBox-icon h-5 w-5"
                onClick={() => setImageBoxOpen(!imageBoxOpen)}
              />
              <SearchCircleIcon
                data-testid="tweetBox-icon"
                className="tweetBox-icon h-5 w-5"
              />
              <EmojiHappyIcon
                data-testid="tweetBox-icon"
                className="tweetBox-icon h-5 w-5"
              />
              <CalendarIcon
                data-testid="tweetBox-icon"
                className="tweetBox-icon h-5 w-5"
              />
              <LocationMarkerIcon
                data-testid="tweetBox-icon"
                className="tweetBox-icon h-5 w-5"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!input}
              className="rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
          <ImageBox
            imageRef={imageInputRef}
            handleAddImage={addimageToTweet}
            showImage={image}
            toggleImageBox={imageBoxOpen}
          />
        </form>
      </div>
    </div>
  );
};
