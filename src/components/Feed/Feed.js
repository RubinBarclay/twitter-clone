import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "../Post/Post";
import TweetBox from "../TweetBox/TweetBox";
import db from "../../firebase";
// import { doc, onSnapshot } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // I think this is the old way of listening to collection,
    // You probably need to do something like this: https://firebase.google.com/docs/firestore/query-data/listen
    // db.collection("posts").onSnapshot((snapshot) => {
    //   setPosts(snapshot.docs.map((doc) => doc.data()));
    // });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
