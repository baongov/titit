import React, { Component } from 'react';
import {addMessage} from '../../state/actions' 

import './index.css'

class MessageInputBox extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { store } = this.context;

    store.dispath(
      addMessage(
        this.inputValue, 
        store.getState().authentication.authorID
      )
    );
  }

  render() {
    return (
      <div>
        <input
          autoFocus
          onChange={this.handleChange}
          placeholder="What is your mood now?"
          ref={e => this.inputValue = e}
          type="text"
        />
      </div>
    );
  }
}

MessageInputBox.contextTypes = {
  store: React.PropTypes.object
}

export default MessageInputBox;
