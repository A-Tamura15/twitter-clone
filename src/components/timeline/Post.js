import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "../../styles/style.css";

const Post = forwardRef(
  ({ displayName, userName, verified, text, avatar, image, date }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">
                  {verified ? <VerifiedUser className="post__badge" /> : null}@
                  {userName}
                </span>
              </h3>
              <div className="post__date">{date}</div>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} />
          <div className="post__footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <PublishOutlined fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
