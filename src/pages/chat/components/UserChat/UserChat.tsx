import React, { useEffect, useState } from 'react';
import './UserChat.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import io from 'socket.io-client';

interface UserChatProps {
    userChatList: any[];
}

const CONNECTION_PORT = 'http://localhost:5000';
let socket: any;

function UserChat({ userChatList }: UserChatProps) {
    const [message, setMessage] = useState('');
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : undefined;
    console.log(user);
    // const user = JSON.parse(userString!);
    console.log(userChatList);

    const [messageList, setMessageList] = useState<any[]>([]);

    useEffect(() => {
        socket = io(CONNECTION_PORT);
    }, [CONNECTION_PORT]);

    useEffect(() => {
        socket.on('receive_message', (data: any) => {
            setMessageList([...messageList, data]);
            console.log(data);
        });
    }, []);

    const sendMessage = async (e: any) => {
        e.preventDefault();
        const messageContent = {
            user: user.email,
            message: message,
        };
        await socket.emit('send_message', messageContent);
        setMessageList([...messageList, messageContent]);
        setMessage('');
    };

    return (
        <div className="userChat">
            <div className="userChat_header">
                <Avatar />

                <div className="userChat_headerInfo">
                    {/* <h3>{userChat.user.email}</h3> */}
                    <p>Last seen at...</p>
                </div>

                <div className="userChat_headerRight">
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
            <div className="userChat_body">
                {userChatList.map(userChat => {
                    if (!userChat) return <></>;
                    return (
                        <>
                            {userChat.user?.email !== user.email ? (
                                <p className="userChat_reciever">
                                    <span className="userChat_name">
                                        {userChat.user?.email}
                                    </span>
                                    {userChat.content}
                                    <span className="userChat_timestamp">
                                        {userChat.createdAt}
                                    </span>
                                </p>
                            ) : (
                                <p className="userChat_message">
                                    <span className="userChat_name">
                                        {userChat.user?.email}
                                    </span>
                                    {userChat.content}
                                    <span className="userChat_timestamp">
                                        {userChat.createdAt}
                                    </span>
                                </p>
                            )}
                        </>
                    );
                })}
            </div>

            <div className="userChat_footer">
                <form>
                    <AttachFileIcon />

                    <input
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        type="text"
                        placeholder="Type a message"
                    />
                    <InsertEmoticonIcon />
                    <button onClick={sendMessage} type="submit">
                        Send a message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UserChat;
