import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox({ dummyData, setPosts }) {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://yt3.ggpht.com/ytc/AKedOLRRPY2EpZ4cxSjwaQM5Ealp-Mx9zYXZfAznxa0t=s900-c-k-c0x00ffffff-no-rj" />
          <input placeholder="What's happening?" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter Image URL"
        />
        <Button
          className="tweetBox__tweetButton"
          onClick={() => setPosts((posts) => [dummyData.pop(), ...posts])}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
