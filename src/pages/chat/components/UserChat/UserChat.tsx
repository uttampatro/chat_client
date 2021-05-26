import React, { useEffect, useState } from "react";
import "./UserChat.css";
import chatService from "../../../../services/chatService";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import { Avatar, IconButton } from "@material-ui/core";

function UserChat() {
  const [conversation, setConversation] = useState<any>([]);
  const [message, setMessage] = useState("");

  const fetchChat = async (conversationId: any) => {
    try {
      const data = await chatService.getChat(conversationId);
      console.log(data);
      //   debugger;
      setConversation(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChat(conversation);
  }, []);

  return (
    <div className="userChat">
      <div className="userChat_header">
        <Avatar />

        <div className="userChat_headerInfo">
          <h3>Conversation name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="userChat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <CallOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="userChat_body">
        <p className="userChat_reciever">
          <span className="userChat_name">Patro</span>
          Hello how r u ?<span className="userChat_timestamp">time: 2:00</span>
        </p>
        <p className="userChat_message">
          <span className="userChat_name">uttam</span>
          heya I am fine!
          <span className="userChat_timestamp">time: 2:00</span>
        </p>
      </div>

      <div className="userChat_footer">
        <form>
          <AttachFileIcon />

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <InsertEmoticonIcon />
          <button type="submit">Send a message</button>
        </form>
      </div>
    </div>
  );
}

export default UserChat;
