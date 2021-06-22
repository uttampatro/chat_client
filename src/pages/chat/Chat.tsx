import React, { useEffect, useState } from 'react';
import './Chat.css';
import ConversationList from './components/conversationList/ConversationList';
import ChatRoom from './components/chatRoom/ChatRoom';
import chatService from '../../services/chatService';
import io, { Socket } from 'socket.io-client';
import * as config from '../../config/api';

const CONNECTION_PORT = `${config.apiConfig.baseUrl}`;
let socket: Socket;

export interface Message extends IMessage {
    id: string;
}

export interface IMessage {
    content: string;
    conversationId: string;
    createdAt: string;
    user: IUser;
}

export interface IUser {
    id: string;
    email: string;
}

function ChatPage() {
    const User = localStorage.getItem('user');
    const user = User ? JSON.parse(User) : undefined;
    const [messageList, setMessageList] = useState<IMessage[]>([]);
    const [selectedConversationId, setSelectedConversationId] =
        useState<string>('');

    useEffect(() => {
        socket = io(CONNECTION_PORT);
    }, [CONNECTION_PORT]);

    const fetchChat = async (conversationId: string) => {
        try {
            const chatList = await chatService.getChat(conversationId);
            setMessageList(
                chatList.map((chat: Message) => {
                    return {
                        content: chat.content,
                        conversationId: chat.conversationId,
                        createdAt: chat.createdAt,
                        user: chat.user,
                    };
                })
            );
            setSelectedConversationId(conversationId);
            socket.emit('join_room', conversationId);
        } catch (error) {
            console.log(error);
        }
    };

    const addNewMessage = (message: IMessage) => {
        setMessageList([...messageList, message]);
    };

    if (!user) {
        return <>Loading...</>;
    }

    return (
        <div className="login_app">
            <ConversationList onClick={fetchChat} user={user} />
            <ChatRoom
                conversationId={selectedConversationId}
                messageList={messageList}
                addNewMessage={addNewMessage}
                socket={socket}
            />
        </div>
    );
}

export default ChatPage;
