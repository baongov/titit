import React, { Component } from 'react';
import { addMessage } from '../../state/actions'
import PropTypes from 'prop-types';
import { Button, FormControl } from 'react-bootstrap'
import './index.css'

class MessageInputBox extends Component {
  constructor(props, context) {
    super(props, context);

    this.handlePost = this.handlePost.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.state = { textLength: 0 };
  }

  handlePost() {
    this.addMessage();
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.addMessage();
    }
  }

  handleOnChange() {
    var textLength = this.messageBox.value.length;

    this.setState({ textLength: textLength });
  }

  addMessage() {
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
        <FormControl
          type="text"
          autoFocus
          inputRef={e => this.messageBox = e}
          placeholder="What is your mood now?"
          onKeyUp={this.handleKeyUp}
          onChange={this.handleOnChange}
          className="MessageBox"
        />
        <div style={{ 'text-align': 'right' }}>

          <p>{this.state.textLength}/50</p>
          <Button
            className="TwitButton"
            onClick={this.handlePost}>
            Post
          </Button>
        </div>
      </div>
    );
  }
}

MessageInputBox.contextTypes = {
  store: PropTypes.object
}

export default MessageInputBox;
