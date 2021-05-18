import React from 'react';
import './ConversationList.css';
import { IconButton } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import Room from '../conversation/Conversation';

const conversations = new Array(10).fill(0);

function ConversationList({ user }: any) {
    return (
        <div className="rooms">
            <div className="rooms_header">
                <h3>{user.email}</h3>

                <div className="rooms_headerRight">
                    <IconButton>
                        <NotificationsNoneIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="rooms_search">
                <div className="rooms_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search User..." type="text" />
                </div>
            </div>

            <div className="rooms_sidebar">
                {conversations.map(_ => (
                    <Room />
                ))}
            </div>
        </div>
    );
}

export default ConversationList;
