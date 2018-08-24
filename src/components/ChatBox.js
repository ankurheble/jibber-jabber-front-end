import React from 'react';
import CreateMessage from './CreateMessage';

export default function ChatBox(props){
    return <React.Fragment>
        <div className="card chat-box">
            <div className="card-body message-box"></div>
            <div className="card-footer"><CreateMessage /></div>
        </div>
    </React.Fragment>;
}