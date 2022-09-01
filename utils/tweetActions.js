import { Tweet } from "../db/models/tweet";
import { Comment } from "../db/models/comment";
import { connection } from "./connect";

//create tweet
export const createTweet = async (newTweet) => await Tweet.create(newTweet);

//get all tweets
export const getTweets = async () => await Tweet.find({}).lean().exec();

//get one tweet
export const getTweet = async (id) => await Tweet.findById(id).lean().exec();

//update tweet
export const updateTweet = async (id, updatedTweet) =>
  await Tweet.findByIdAndUpdate(id, updatedTweet, { new: true });

//delete tweet
export const deleteTweetAndComments = async (id) => {
  const deletedTweet = await Tweet.findByIdAndRemove(id);
  const deletedComments = await Comment.deleteMany({ tweet: deletedTweet._id });
  return {
    deletedTweet,
    deletedComments,
  };
};
