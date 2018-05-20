import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.css'

class Message extends Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

class MessageList extends Component {
    render() {
        const { store } = this.context;
        const messages = store.getState().twitterMessages.reverse();

        return (
            <div>
                {
                    messages.map(function (element, i) {
                        return (
                            <Message
                                key={element.messageID} 
                                text={element.message} 
                                author={element.author}
                                time= {element.time}
                                />)
                    })
                }
            </div>
        );
    }
}

MessageList.contextTypes = {
    store: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    twitterMessages: state.twitterMessages
})

export default connect(
    mapStateToProps
)(MessageList);
