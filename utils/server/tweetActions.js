import { TweetModel } from "../../db/models";
import { CommentModel } from "../../db/models";
import { connection } from "../connect";

//create tweet
export const createTweet = async (newTweet) => await TweetModel.create(newTweet);

//get all tweets
export const getTweets = async () => await TweetModel.find({}).lean().exec();

//get one tweet
export const getTweet = async (id) => await TweetModel.findById(id).lean().exec();

//update tweet
export const updateTweet = async (id, updatedTweet) =>
  await TweetModel.findByIdAndUpdate(id, updatedTweet, { new: true });

//delete tweet
export const deleteTweetAndRelatedComments = async (id) => {
  const deletedTweet = await TweetModel.findByIdAndRemove(id);
  const deletedComments = await CommentModel.deleteMany({ tweet: deletedTweet._id });
  return {
    deletedTweet,
    deletedComments,
  };
};
