import React, { useContext, useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import UserInfoContext from "../../userInfoContext";

function TweetBox({ setPosts }) {
  const { userInfo } = useContext(UserInfoContext);
  const [tweetText, setTweetText] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const createPost = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...userInfo,
        text: tweetText,
        image: tweetImage,
      }),
    });
    const data = await response.json();

    // Prepend new post to feed
    setPosts((posts) => [data, ...posts]);

    // Clear input fields
    setTweetText("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form onSubmit={createPost}>
        <div className="tweetBox__input">
          <Avatar src={userInfo.avatar} />
          <input
            placeholder="What's happening?"
            onChange={(e) => setTweetText(e.target.value)}
            value={tweetText}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter Image URL"
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
        />
        <Button className="tweetBox__tweetButton" type="submit">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
