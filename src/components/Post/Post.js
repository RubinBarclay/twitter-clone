import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import "./Post.css";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://yt3.ggpht.com/ytc/AKedOLRRPY2EpZ4cxSjwaQM5Ealp-Mx9zYXZfAznxa0t=s900-c-k-c0x00ffffff-no-rj" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Roaring Kitty
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @dfvalue
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenge you to build a twitter clone with react</p>
          </div>
        </div>
        <img
          src="https://quickbutik.imgix.net/12702S/products/5eb9322c7591d.jpeg"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
