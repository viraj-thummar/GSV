import React from "react";
import { useSelector } from "react-redux";

// import Post from "./Post/Post";

function Posts() {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      {/* <h5 className="form_header">Upload Posts</h5> */}
      {/* <Post /> */}
    </div>
  );
}

export default Posts;
