import React, { useEffect, useState } from 'react';
import './ChatRoom.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import { IMessage, IUser } from '../../Chat';
import { Socket } from 'socket.io-client';

interface UserChatProps {
    messageList: IMessage[];
    conversationId: string;
    addNewMessage: (message: IMessage) => void;
    socket: Socket;
}

function ChatRoom({
    messageList,
    addNewMessage,
    conversationId,
    socket,
}: UserChatProps) {
    const [message, setMessage] = useState('');
    const userString = localStorage.getItem('user');
    const user: IUser = userString ? JSON.parse(userString) : undefined;

    useEffect(() => {
        socket?.on('receive_message', (message: IMessage) => {
            addNewMessage(message);
        });
    }, [messageList, socket]);

    const sendMessage = async (e: any) => {
        e.preventDefault();
        const newMessage: IMessage = {
            content: message,
            conversationId: conversationId,
            createdAt: new Date().toISOString(),
            user: user,
        };
        socket.emit('new_message', newMessage);
        addNewMessage(newMessage);
        setMessage('');
    };

    return (
        <div className="userChat">
            <div className="userChat_header">
                <Avatar />

                <div className="userChat_headerInfo">
                    <h3>User</h3>
                    {/* <p>Last seen at...</p> */}
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
                {messageList.map((message: IMessage) => {
                    if (!message) return <></>;
                    return (
                        <>
                            {message.user?.email !== user.email ? (
                                <p className="userChat_reciever">
                                    <span className="userChat_name">
                                        {message.user?.email}
                                    </span>
                                    {message.content}
                                    <span className="userChat_timestamp">
                                        {message.createdAt}
                                    </span>
                                </p>
                            ) : (
                                <p className="userChat_message">
                                    <span className="userChat_name">
                                        {message.user?.email}
                                    </span>
                                    {message.content}
                                    <span className="userChat_timestamp">
                                        {message.createdAt}
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

export default ChatRoom;
