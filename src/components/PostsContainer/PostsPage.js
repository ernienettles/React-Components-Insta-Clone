//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import postsData from "../../dummy-data.js"
// import data 

const PostsPage = () => {
  // set up state for your data

  const [posts, setPosts] = useState(postsData);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {posts.map((post, index) => <Post post = {post} key = {index}/> )}
    </div>
    
  );
};

export default PostsPage;
