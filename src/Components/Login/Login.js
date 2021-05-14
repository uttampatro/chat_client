import React, { useEffect, useState } from "react";
import axios from "axios";
import Chat from "../Chats/Chat";
import Rooms from "../Rooms/Rooms";

require("dotenv").config();


const GITHUB_CLIENT_ID = process.env.CLIENT_ID;
const githubRedirectURL = process.env.GITHUB_REDIRECT_URL;
const path = process.env.PATH;

function Login() {
  const [user, setUser] = useState();

  useEffect(() => {
    (async function () {
      const usr = await axios
        .get(`http://localhost:8000/api/me`, {
          withCredentials: true,
        })
        .then((res) => res.data);

      setUser(usr);
    })();
  }, []);

  return (
    <div className="login">
      <div className= "login_body" > 
        {!user ? (
          <a
            href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${githubRedirectURL}?path=${path}&scope=user:email`}
          >
            LOGIN WITH GITHUB
          </a>
        ) : (
          JSON.stringify(user)
            // <>
            //   <Chat />
            //   <Rooms />
            // </>
        )}
      </div>
    </div>
  );
}

export default Login;
