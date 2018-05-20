import React, { Component } from 'react';
import {addMessage} from '../../state/actions' 
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap'
import './index.css'

class MessageInputBox extends Component {
  constructor(props, context) {
    super(props, context);

    this.handlePost =this.handlePost.bind(this);
  }

  handlePost () {
    const { store } = this.context;

    store.dispatch(
      addMessage(
        this.messageBox.value,
        store.getState().authentication.authorID
      )
    );
  }

  render() {
    return (
      <div>
        <input
          autoFocu
          placeholder="What is your mood now?"
          ref={e => this.messageBox = e}
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
