import React, { useEffect, useState } from "react";
import axios from "axios";
import Chat from "../Chats/Chat";
import Rooms from "../Rooms/Rooms";
import "./Login.css";

require("dotenv").config();


const gitHubAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${githubRedirectURL}?path=${path}&scope=user:email`;

function Login() {
  const [user, setUser] = useState();

  useEffect(() => {
    (async function () {
      // try {
      //   const res = await axios.get(`http://localhost:5000/api/me`, {
      //   withCredentials: true,
      // });
      // setUser(res.data);
      // console.log(res, res.data);
      // } catch (error) {
      //   console.log(error)
      // }
    })();
  }, []);

  const handleSignIn = async () => {
    try {
      const res = await axios.get(gitHubAuthURL, {
        headers: { 
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      });
      setUser(res.data)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(gitHubAuthURL);

  return (
    <div className="login">
      {!user ? (
        <button onClick={handleSignIn}>LOGIN WITH GITHUB</button>
      ) : (
        JSON.stringify(user)
        // <div className="login_app">
        //     <Rooms user={user} />
        //     <Chat user={user} />
        // </div>
      )}
    </div>
  );
}

export default Login;
