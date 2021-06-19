import React, { useState } from 'react';
import './Chat.css';
import ConversationList from './components/conversationList/ConversationList';
import UserChat from './components/userChat/UserChat';
import chatService from '../../services/chatService';

function ChatPage() {
    const User = localStorage.getItem('user');
    const user = User ? JSON.parse(User) : undefined;
    // console.log(user.email)
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
            <UserChat userChatList={userChatList} />
        </div>
    );
}

export default ChatPage;
