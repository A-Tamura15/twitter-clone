import React, { useEffect, useState } from "react";
import Post from "./Post";
import "../../styles/style.css";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import FlipMove from "react-flip-move";

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));

    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const timestampToTime = (timestamp) => {
    console.log(timestamp);
    if (timestamp == null) {
      return;
    }
    const date = new Date(timestamp.seconds * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const min =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const sec =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return year + "年" + month + "月" + day + "日";
  };

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            date={timestampToTime(post.timestamp)}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Timeline;
