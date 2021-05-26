import React from "react";
import "./Chat.css";
import ConversationList from "./components/conversationList/ConversationList";
import io from "socket.io-client";
import UserChat from "./components/UserChat/UserChat";

const CONNECTION_PORT = "localhost:5000";
let socket;

function ChatPage() {
  const githubUser = localStorage.getItem("user");
  const user = githubUser ? JSON.parse(githubUser) : undefined;

  // useEffect(() => {
  //     socket = io(CONNECTION_PORT);
  // }, [CONNECTION_PORT]);

  if (!user) {
    return <>Loading...</>;
  }

  return (
    <div className="login_app">
      <ConversationList />

      <div className="chat">
        <UserChat />
      </div>
    </div>
  );
}

export default ChatPage;
