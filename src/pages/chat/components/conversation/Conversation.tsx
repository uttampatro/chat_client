import { Avatar } from '@material-ui/core';
import React from 'react';
import './Conversation.css';

interface ConversationProps {
    conversation: any;
    onClick: Function;
}

function Conversation(props: ConversationProps) {
    const { conversation, onClick } = props;
    const { lastMessage } = conversation;

    return (
        <div onClick={() => onClick(conversation.id)} className="conversation">
            <Avatar />
            <div className="conversation_info">
                <h2>User</h2>
                <p>{lastMessage?.content}</p>
            </div>
        </div>
    );
}

export default Conversation;
