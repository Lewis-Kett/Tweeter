import { Tweet } from "../db/models/tweet";
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
export const deleteTweet = async (id) => await Tweet.findByIdAndRemove(id);