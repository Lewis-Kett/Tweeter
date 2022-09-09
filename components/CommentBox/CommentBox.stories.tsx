import { ChatAlt2Icon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { CommentBox } from "./CommentBox";

export default {
  title: "Components/CommentBox",
  component: CommentBox,
};

export const Primary = () => {
  const [commentBoxOpen, setCommentBoxOpen] = useState<boolean>(false);
  const [commentBoxInput, setCommentBoxInput] = useState<string>("");

  return (
    <>
      <ChatAlt2Icon
        className="tweetBox-icon h-5 w-5"
        onClick={() => setCommentBoxOpen(!commentBoxOpen)}
      />
      {commentBoxOpen && (
        <CommentBox
          value={commentBoxInput}
          onChange={setCommentBoxInput}
          handleSubmit={(e) => {
            e.preventDefault();
            console.log(commentBoxInput);
            setCommentBoxInput("")
          }}
        />
      )}
    </>
  );
};
