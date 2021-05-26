import { Avatar } from "@material-ui/core";
import React from "react";
import "./Conversation.css";

function Conversation(props: any) {
  const { conversation } = props;
  const { lastMessage } = conversation;
  // console.log(conversation);
  return (
    <div className="conversation">
      <Avatar />
      <div className="conversation_info">
        <h2>user</h2>
        <p>{lastMessage.content}</p>
      </div>
    </div>
  );
}

export default Conversation;
