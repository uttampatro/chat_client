import { Avatar, IconButton } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './Chat.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import io from 'socket.io-client';
import ConversationList from './components/conversationList/ConversationList';

const CONNECTION_PORT = 'localhost:5000';
let socket;
function ChatPage() {
    const [message, setMessage] = useState('');

    const githubUser = localStorage.getItem('user');
    const user = githubUser ? JSON.parse(githubUser) : undefined;

    useEffect(() => {
        socket = io(CONNECTION_PORT);
    }, [CONNECTION_PORT]);

    if (!user) {
        return <>Loading...</>;
    }

    return (
        <div className="login_app">
            <ConversationList user={user} />

            <div className="chat">
                <div className="chat_header">
                    <Avatar />

                    <div className="chat_headerInfo">
                        <h3>Room name</h3>
                        <p>Last seen at...</p>
                    </div>

                    <div className="chat_headerRight">
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

                <div className="chat_body">
                    <p className="chat_reciever">
                        <span className="chat_name">Patro</span>
                        Hello how r u ?
                        <span className="chat_timestamp">time: 2:00</span>
                    </p>
                    <p className="chat_message">
                        <span className="chat_name">{user.email}</span>
                        heya I am fine!
                        <span className="chat_timestamp">time: 2:00</span>
                    </p>
                </div>

                <div className="chat_footer">
                    <form>
                        <AttachFileIcon />

                        <input
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            type="text"
                            placeholder="Type a message"
                        />
                        <InsertEmoticonIcon />
                        <button type="submit">Send a message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChatPage;
