import React, { useEffect, useState } from "react";
import { CommentBody, CommentType, TweetType } from "../../typings";
import Timeago from "react-timeago";
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { fetchComments, postComment } from "../../utils/client";
import { Comment, CommentBox } from "../../components";
import toast from "react-hot-toast";

interface TweetProps {
  tweet: TweetType;
}

export const Tweet = ({ tweet }: TweetProps) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [commentBoxOpen, setCommentBoxOpen] = useState<boolean>(false);
  const [commentInput, setCommentInput] = useState<string>("");

  const refreshComments = async () => {
    const comments: CommentType[] = await fetchComments(tweet._id);
    setComments(comments);
  };

  useEffect(() => {
    refreshComments();
  }, []);

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const commentToast = toast.loading("Posting Comment...");

    const commentBody: CommentBody = {
      comment: commentInput,
      tweetId: tweet._id,
      username: tweet.username,
      profileImage: tweet.profileImage,
    };

    const postedComment = await postComment(commentBody);

    toast.success("Comment Posted!", {
      id: commentToast,
    });

    setCommentInput("");
    setCommentBoxOpen(false);
    refreshComments();
  };

  return (
    <div className="flex flex-col space-x-3 border-y border-gray-100 p-5" data-testid="container">
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
        <div
          className="tweet-icon"
          onClick={() => setCommentBoxOpen(!commentBoxOpen)}
        >
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
      {commentBoxOpen && (
        <CommentBox
          value={commentInput}
          onChange={setCommentInput}
          handleSubmit={handleCommentSubmit}
        />
      )}
      {comments.length > 0 && (
        <div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5 scrollbar-hide">
          {comments.map((comment: CommentType) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};
