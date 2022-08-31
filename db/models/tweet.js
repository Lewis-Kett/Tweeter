import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    text: String,
    blockTweet: Boolean,
    username: String,
    profileImage: String,
    image: String,
  },
  { timestamps: true }
);

export const Tweet =
  mongoose.models.Tweet || mongoose.model("Tweet", tweetSchema);
