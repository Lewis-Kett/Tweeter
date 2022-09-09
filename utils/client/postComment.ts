import { CommentBody } from "../../typings";

export const postComment = async (comment: CommentBody) => {
  const result = await fetch(`/api/comment`, {
    headers: { "content-type": "application/json" },
    body: JSON.stringify(comment),
    method: "POST",
  });

  const json = await result.json();

  return json;
};
