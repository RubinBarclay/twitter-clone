import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "../Post/Post";
import TweetBox from "../TweetBox/TweetBox";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await fetch("/api/post", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      const newestPostsFirst = data.reverse();
      setPosts(newestPostsFirst);
    };
    fetchAllPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox setPosts={setPosts} />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post._id} // This key has to be persistent between renders, otherwise anim wont work properly
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
