import React from "react";
import "./App.css";
import Chat from "./Components/Chats/Chat";
import Message from "./Components/Messages/Message";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Chat />
        <Message />
      </div>
    </div>
  );
}

export default App;
