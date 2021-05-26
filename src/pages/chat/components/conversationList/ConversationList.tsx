import React, { useEffect, useState } from "react";
import "./ConversationList.css";
import { IconButton } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import Conversation from "../conversation/Conversation";
import chatService from "../../../../services/chatService";

const conversations = new Array(10).fill(0);

function ConversationList({ user }: any) {
  const [conversationList, setConversationList] = useState<any[]>([]);

  const fetchConversationList = async () => {
    try {
      const data = await chatService.getConversationList();
      setConversationList(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchConversationList();
  }, []);

  return (
    <div className="rooms">
      <div className="rooms_header">
        <h3>hello</h3>

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
        {conversationList.map((conversation: any) => {
          return (
            <Conversation key={conversation.id} conversation={conversation} />
          );
        })}
      </div>
    </div>
  );
}

export default ConversationList;