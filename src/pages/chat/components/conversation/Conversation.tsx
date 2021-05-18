import { Avatar } from '@material-ui/core';
import React from 'react';
import './Conversation.css';

function Room() {
    return (
        <div className="room">
            <Avatar />
            <div className="room_info">
                <h2>Room Name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    );
}

export default Room;
