import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import "../../styles/style.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      id: Math.floor(Math.random() * 1e5),
      displayName: "React勉強者",
      userName: "react_study",
      verified: true,
      text: tweetMessage,
      avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image: tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <img
            src="http://shincode.info/wp-content/uploads/2021/12/icon.png"
            alt="プロフィール画像"
            className="twitterBox__userIcon"
          />
          <input
            placeholder="いまどうしてる？"
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
