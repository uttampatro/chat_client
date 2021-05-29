import React, { useState } from 'react';
import './UserChat.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import { Avatar, IconButton } from '@material-ui/core';

interface UserChatProps {
    userChatList: any[];
}

function UserChat(props: UserChatProps) {
    const [message, setMessage] = useState('');
    const { userChatList } = props;
    console.log(userChatList);

    return (
        <div className="userChat">
            {userChatList.map((userChat) => {
                return (
                    <>
                        <div className="userChat_header">
                            <Avatar />

                            <div className="userChat_headerInfo">
                                <h3>{userChat.user.email}</h3>
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
                            <p className="userChat_reciever">
                                <span className="userChat_name"> patro</span>
                                Hello
                                <span className="userChat_timestamp">
                                    time: 2:00
                                </span>
                            </p>
                            <p className="userChat_message">
                                <span className="userChat_name">uttam</span>
                                ok
                                <span className="userChat_timestamp">
                                    time: 2:00
                                </span>
                            </p>
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
                                <button type="submit">Send a message</button>
                            </form>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default UserChat;
