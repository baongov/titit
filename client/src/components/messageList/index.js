import React, { Component } from 'react';
import './index.css'

const Message = React.createClass({
    render(){
        <div>
            {this.props.element.message}
        </div>
    }
});

class MessageList extends Component {
    render() {
        const { store } = this.context;
        var messages = store.getState().twitterMessages;
        var messageListRender = messages.map(function (element, i) {
            return <Message messageValue={element}/>
        });
        return (
            <div>
                {messageListRender}
            </div>
        );
    }
}

MessageList.contextTypes = {
    store: React.PropTypes.object
}

export default MessageList;
