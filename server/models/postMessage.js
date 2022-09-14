import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  creator: String,
  title: String,
  description: String,
  category: String,
  link: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postMessage = mongoose.model("postMessage", postSchema);

export default postMessage;
