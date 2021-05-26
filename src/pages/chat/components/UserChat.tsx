import React, { useEffect, useState } from "react";
import chatService from "../../../services/chatService";

function UserChat() {
  const [conversation, setConversation] = useState<any>([]);

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

  return <div></div>;
}

export default UserChat;
