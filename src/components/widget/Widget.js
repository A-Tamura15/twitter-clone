import Search from "@mui/icons-material/Search";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "../../styles/style.css";

function Widget() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>いまどうしてる？</h2>
        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId={"1508838714180612100"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactjs"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/reactjs"}
          options={{ text: "#React.js勉強中" }}
        />
      </div>
    </div>
  );
}

export default Widget;
