import React, { Component } from 'react';
import {addMessage} from '../../state/actions' 
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap'
import './index.css'

class MessageInputBox extends Component {
  constructor(props, context) {
    super(props, context);

    this.handlePost = this.handlePost.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

  handlePost () {
    this.addMessage();
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.addMessage();
    }
  }

  addMessage(){
    const { store } = this.context;

    store.dispatch(
      addMessage(
        this.messageBox.value,
        store.getState().authentication.authorID
      )
    );

    this.messageBox.value = '';
  }
  render() {
    return (
      <div>
        <input
          autoFocus
          placeholder="What is your mood now?"
          ref={e => this.messageBox = e}
          onKeyUp={this.handleKeyUp}
          type="text"
        />
        <Button onClick={this.handlePost}>Post</Button>
      </div>
    );
  }
}

MessageInputBox.contextTypes = {
  store: PropTypes.object
}

export default MessageInputBox;
