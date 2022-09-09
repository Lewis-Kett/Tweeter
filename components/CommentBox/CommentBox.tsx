import React from "react";

interface CommentBoxProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>
}

export const CommentBox = ({
  value,
  onChange,
  handleSubmit,
}: CommentBoxProps) => {
  return (
    <form onSubmit={handleSubmit} className="mt-3 flex space-x-3">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 rounded-lg bg-gray-100 p-2 outline-none"
        type="text"
        placeholder="Write a comment..."
      />
      <button
        type="submit"
        disabled={!value}
        className="text-twitter disabled:text-gray-200"
      >
        Post
      </button>
    </form>
  );
};
