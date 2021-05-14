import React, { useState } from "react";
import "./App.css";
// import Chat from "./Components/Chats/Chat";
// import Rooms from "./Components/Rooms/Rooms";
import Login from "./Components/Login/Login";



function App() {

  const [user, setUser] = useState();

  return (
    <div className="app">
      <div className="app_body">
        <Login />
      </div>
    </div>
  );
}

export default App;
