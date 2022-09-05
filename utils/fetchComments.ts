import { CommentType } from "../typings";

export const fetchComments = async (tweetId: string) => {
  const res = await fetch(`/api/comment?tweetId=${tweetId}`);

  const comments: CommentType[] = await res.json();
  
  return comments;
};
