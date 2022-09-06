import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    comment: String,
    username: String,
    profileImage: String,
    tweetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tweet",
      required: true
    },
  },
  { timestamps: true }
);

export const CommentModel =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
