import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    discription: {
      type: String,
      required: true,
    },
    like: {
      type: Array,
      default: [],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    bookmark: {
      type: Array,
      default: [],
    },
  },
  { timestamp: true }
);
//timestamp konsa person kis time par create karliya
export const Tweet = mongoose.model("Tweet", userSchema);