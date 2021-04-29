import { Avatar, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import './Message.css'
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';


function Message() {

    const [input, setInput] = useState('')

    return (
        <div className="message">
        <div className="message_header">
            <Avatar />

            <div className="message_headerInfo">
                <h3>Room name</h3>
                <p>Last seen at...</p>
            </div>

            <div className="message_headerRight">
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

        <div className="message_body">
            <p className='message_reciever'>
                <span className="message_name">Patro</span>
                Hello how r u ?
                <span className="message_timestamp">time: 2:00</span>
            </p>
            <p className='message_chat'>
                <span className="message_name">Uttam</span>
                heya 
                I am fine! 
                <span className="message_timestamp">time: 2:00</span>
            </p>
        </div>

        <div className="message_footer">
        <AttachFileIcon />

               
            <form>
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Type a message"
                />
                 <InsertEmoticonIcon />
                <button type="submit">
                    Send a meassage
                </button>
            </form>
        </div>
    </div>
)
}


export default Message





{/* <p className={`message_chat ${message.received && "message_reciever"}`}> */}