import React from "react";
import "./Chat.css";
import { IconButton } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChat from "../SidebarChat/SidebarChat";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <h3>Chats</h3>

        <div className="chat_headerRight">
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      
      <div className="chat_search">
        <div className="chat_searchContainer">
          <SearchOutlined />
          <input placeholder="Search User..." type="text" />
        </div>
      </div>

      <div className="chat_sidebar">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Chat;
