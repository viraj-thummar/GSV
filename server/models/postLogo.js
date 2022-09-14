import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  link: String,
  status: String,
  industry: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postLogo = mongoose.model("postLogo", postSchema);

export default postLogo;
