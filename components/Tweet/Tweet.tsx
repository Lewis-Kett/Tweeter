import React, { useEffect, useState } from "react";
import { CommentType, TweetType } from "../../typings";
import Timeago from "react-timeago";
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { fetchComments } from "../../utils/fetchComments";
import { Comment } from "../Comment";

interface TweetProps {
  tweet: TweetType;
}

export const Tweet = ({ tweet }: TweetProps) => {
  const [comments, setComments] = useState<CommentType[]>([]);

  const refreshComments = async () => {
    const comments: CommentType[] = await fetchComments(tweet._id);
    setComments(comments);
  };

  useEffect(() => {
    refreshComments();
  }, []);

  return (
    <div className="flex flex-col space-x-3 border-y border-gray-100 p-5">
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={tweet.profileImage}
          alt="profile image"
        />

        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, "").toLocaleLowerCase()} ·
            </p>
            <Timeago
              data-testid="time-ago"
              className="text-sm text-gray-500"
              date={tweet.createdAt}
            />
          </div>
          <p className="pt-1">{tweet.text}</p>
          {tweet.image && (
            <img
              src={tweet.image}
              alt="tweet image"
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>
      <div className=" mt-5 flex justify-between">
        <div className="tweet-icon">
          <ChatAlt2Icon data-testid="tweet-controls" className="h-5 w-5" />
          <p>{comments.length}</p>
        </div>
        <div className="tweet-icon">
          <SwitchHorizontalIcon
            data-testid="tweet-controls"
            className="h-5 w-5"
          />
        </div>

        <div className="tweet-icon">
          <HeartIcon data-testid="tweet-controls" className="h-5 w-5" />
        </div>

        <div className="tweet-icon">
          <UploadIcon data-testid="tweet-controls" className="h-5 w-5" />
        </div>
      </div>
      {comments.length > 0 && (
        <div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5">
          {comments.map((comment: CommentType) => (
            <Comment key={comment._id} comment={comment}/>
          ))}
        </div>
      )}
    </div>
  );
};
