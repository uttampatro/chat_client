import React, { useState } from 'react';
import './Chat.css';
import ConversationList from './components/conversationList/ConversationList';
import io from 'socket.io-client';
import UserChat from './components/userChat/UserChat';
import chatService from '../../services/chatService';

const CONNECTION_PORT = 'localhost:5000';
let socket;

function ChatPage() {
    const githubUser = localStorage.getItem('user');
    const user = githubUser ? JSON.parse(githubUser) : undefined;
    const [userChatList, setUserChatList] = useState([]);

    const fetchChat = async (conversationId: any) => {
        try {
            const chatList = await chatService.getChat(conversationId);
            setUserChatList(chatList);
        } catch (error) {
            console.log(error);
        }
    };

    if (!user) {
        return <>Loading...</>;
    }

    return (
        <div className="login_app">
            <ConversationList onClick={fetchChat} user={user} />

            <div className="chat">
                {userChatList.map((userChat: any) => {
                    return <UserChat key={userChat.id} userChat={userChat} />;
                })}
            </div>
        </div>
    );
}

export default ChatPage;
