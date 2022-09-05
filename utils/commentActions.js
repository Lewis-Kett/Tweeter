import { Comment } from "../db/models/comment";
import { connection } from "./connect";

//create comment
export const createComment = async (newComment) =>
  await Comment.create(newComment);

//get all comments
export const getComments = async () => await Comment.find({}).lean().exec();

//get all comments for tweet
export const getCommentsForTweet = async (tweetId) => await Comment.find({tweetId}).lean().exec();

//get one comment
export const getComment = async (id) =>
  await Comment.findById(id).lean().exec();

//update comment
export const updateComment = async (id, updatedComment) =>
  await Comment.findByIdAndUpdate(id, updatedComment, { new: true });

//delete comment
export const deleteComment = async (id) => await Comment.findByIdAndRemove(id);