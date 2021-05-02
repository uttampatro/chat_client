import React from "react";
import "./Rooms.css";
import { IconButton } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import Room from "./Room/Room";

function Chat() {
  return (
    <div className="rooms">
      <div className="rooms_header">
        <h3>Chats</h3>

        <div className="rooms_headerRight">
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      
      <div className="rooms_search">
        <div className="rooms_searchContainer">
          <SearchOutlined />
          <input placeholder="Search User..." type="text" />
        </div>
      </div>

      <div className="rooms_sidebar">
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      </div>
    </div>
  );
}

export default Chat;
