import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox({ setPosts }) {
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
        displayName: "Test",
        username: "testMeister",
        verified: false,
        text: tweetText,
        image: tweetImage,
        avatar:
          "https://yt3.ggpht.com/ytc/AKedOLRRPY2EpZ4cxSjwaQM5Ealp-Mx9zYXZfAznxa0t=s900-c-k-c0x00ffffff-no-rj",
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
          <Avatar src="https://yt3.ggpht.com/ytc/AKedOLRRPY2EpZ4cxSjwaQM5Ealp-Mx9zYXZfAznxa0t=s900-c-k-c0x00ffffff-no-rj" />
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
