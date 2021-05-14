import React, { useEffect, useState } from "react";
import axios from "axios";
import Chat from "../Chats/Chat";
import Rooms from "../Rooms/Rooms";
import "./Login.css";

require("dotenv").config();

const GITHUB_CLIENT_ID = process.env.CLIENT_ID;
const githubRedirectURL = process.env.GITHUB_REDIRECT_URL;
const path = process.env.PATH;

function Login() {
  const [user, setUser] = useState();

  useEffect(() => {
    (async function () {
      try {
        const usr = await axios.get(`http://localhost:8000/api/me`, {
          withCredentials: true,
        });

        setUser(usr);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="login">
      {!user ? (
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${githubRedirectURL}?path=${path}&scope=user:email`}
        >
          LOGIN WITH GITHUB
        </a>
      ) : (
        // JSON.stringify(user)
        <div className="login_app">
            <Rooms user={user} />
            <Chat user={user} />
        </div>
      )}
    </div>
  );
}

export default Login;
