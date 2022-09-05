import React from "react";
import { CommentType } from "../../typings";
import Timeago from "react-timeago";

interface CommentProps {
  comment: CommentType;
}

export const Comment = ({ comment }: CommentProps) => {
  return (
    <div key={comment._id} className=" relative flex space-x-2">
      <hr className="absolute left-5 top-10 h-8 border-x border-twitter/30" />
      <img
        src={comment.profileImage}
        className="mt-2 h-7 w-7 rounded-full object-cover"
        alt="avatar image"
      />
      <div>
        <div className="flex items-center space-x-1">
          <p className="mr-1 font-bold">{comment.username}</p>
          <p className="hidden text-sm text-gray-500 lg:inline">
            @{comment.username.replace(/\s+/g, "").toLocaleLowerCase()} ·
          </p>
          <Timeago data-testid="time-ago" className="text-sm text-gray-500" date={comment.createdAt} />
        </div>
        <p>{comment.comment}</p>
      </div>
    </div>
  );
};
