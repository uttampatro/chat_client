import React, { useEffect, useState } from 'react';
import './ConversationList.css';
import { IconButton } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import Conversation from '../conversation/Conversation';
import chatService from '../../../../services/chatService';
import { useHistory } from 'react-router';

interface ConversationListProps {
    user: any;
    onClick: Function;
}

function ConversationList({ user, onClick }: ConversationListProps) {
    const [conversationList, setConversationList] = useState<any[]>([]);
    const history = useHistory();

    const fetchConversationList = async () => {
        try {
            const data = await chatService.getConversationList();
            setConversationList(data);
        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        try {
            history.push('/login');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchConversationList();
    }, []);

    return (
        <div className="rooms">
            <div className="rooms_header">
                <button onClick={logout}>Logout</button>

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
                {conversationList?.map((conversation: any) => {
                    return (
                        <Conversation
                            onClick={onClick}
                            key={conversation.id}
                            conversation={conversation}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ConversationList;
