import { CommentModel } from "../../db/models";
import { connection } from "../connect";

//create comment
export const createComment = async (newComment) =>
  await CommentModel.create(newComment);

//get all comments
export const getComments = async () =>
  await CommentModel.find({}).sort({ createdAt: -1 }).lean().exec();

//get all comments for tweet
export const getCommentsForTweet = async (tweetId) =>
  await CommentModel.find({ tweetId }).sort({ createdAt: -1 }).lean().exec();

//get one comment
export const getComment = async (id) =>
  await CommentModel.findById(id).lean().exec();

//update comment
export const updateComment = async (id, updatedComment) =>
  await CommentModel.findByIdAndUpdate(id, updatedComment, { new: true });

//delete comment
export const deleteComment = async (id) =>
  await CommentModel.findByIdAndRemove(id);
