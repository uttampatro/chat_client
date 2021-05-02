import React from "react";
import "./App.css";
import Rooms from "./Components/Rooms/Rooms";
import Chat from "./Components/Chats/Chat";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Rooms />
        <Chat />
      </div>
    </div>
  );
}

export default App;
