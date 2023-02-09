import React, { useState } from "react";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button, Drawer } from "@mui/material";
import "../../styles/style.css";

function Sidebar() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  return (
    <>
      {/* <MenuIcon onClick={() => setDrawerOpened(true)} /> */}
      <img
        src="http://shincode.info/wp-content/uploads/2021/12/icon.png"
        alt="プロフィール画像"
        onClick={() => setDrawerOpened(true)}
        className="sidebar__userIcon"
      />
      <Drawer open={drawerOpened} onClose={() => setDrawerOpened(false)}>
        <div className="sidebar">
          {/* プロフィール画像 */}
          <img
            src="http://shincode.info/wp-content/uploads/2021/12/icon.png"
            alt="プロフィール画像"
            className="sidebar__userIcon"
          />
          {/* sidebarOption */}
          <SidebarOption text="ホーム" Icon={HomeIcon} active />
          <SidebarOption text="話題を検索" Icon={SearchIcon} />
          <SidebarOption text="通知" Icon={NotificationsNoneIcon} />
          <SidebarOption text="メッセージ" Icon={MailOutlineIcon} />
          <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
          <SidebarOption text="リスト" Icon={ListAltIcon} />
          <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
          <SidebarOption text="もっとみる" Icon={MoreHorizIcon} />
          {/* ツイートボタン */}
          <Button variant="outlined" className="sidebar__tweet" fullWidth>
            ツイートする
          </Button>
        </div>
      </Drawer>
    </>
  );
}

export default Sidebar;
