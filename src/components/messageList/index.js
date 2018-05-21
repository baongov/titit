import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import {deleteMessage} from '../../state/actions' 

import './index.css'

class Message extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = { "deleteButtonShow": false }

        this.handleOItemClick = this.handleOItemClick.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
    }

    handleOItemClick() {
        if (this.state.deleteButtonShow) {
            this.setState({ "deleteButtonShow": false });
        } else {
            this.setState({ "deleteButtonShow": true });
        }
    }

    onClickDelete() {
        this.props.handleDeleteMessage(this.props.messageID)
    }
    render() {
        return (
            <div>
                <ListGroupItem
                    style={{ 'margin': '10px' }}
                    onClick={this.handleOItemClick}
                    header={this.props.message}
                >
                    {this.props.authorID} &#186; {this.props.time}
                </ListGroupItem>
                <div style= {{'text-align' : 'right'}}>
                {
                    this.state.deleteButtonShow ?
                        (
                            <Button
                                onClick={this.onClickDelete}
                                bsStyle="danger"
                            >
                                Delete
                            </Button>
                        ) : null
                }
                </div>
            </div>
        );
    }
}

class MessageList extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleDeleteMessage = this.handleDeleteMessage.bind(this);
    }
    handleDeleteMessage(messageID) {
        const {store} = this.context;
        console.log("handleDeleteMessage", messageID)
        store.dispatch(deleteMessage(messageID));
    }

    render() {
        const ctx = this;
        const { store } = this.context;
        const messages = [
            ...store.getState().twitterMessages
        ].reverse();

        return (
            <ListGroup>
                {
                    messages.map(function (element, i) {
                        return (
                            <Message
                                messageID={element.messageID}
                                message={element.message}
                                authorID={element.authorID}
                                time={element.time}
                                handleDeleteMessage={ctx.handleDeleteMessage}
                            />)
                    })
                }
            </ListGroup>
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
