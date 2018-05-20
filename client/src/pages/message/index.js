import React, { Component } from 'react';

import MessageInputBox from '../../components/messageInputBox'
import MessageList from '../../components/messageList'

import './index.css'

class MessagePage extends Component {
    render() {
        return (
            <div>
                <MessageInputBox/>
                <MessageList/>
            </div>
        );
    }
}

export default MessagePage;
