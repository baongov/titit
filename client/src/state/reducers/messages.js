import {
    ADD_MESSAGE,
    DELETE_MESSAGE,
    UPDATE_MESSAGE
} from '../actions';

import { splitMessage } from '../../tools/messageSplitter';
import uuid from 'node-uuid';

// twitterMessages : [{
//     author : 
//     time :
//     message :
// }]

const findMessageIndexByID = function (messages, messageID) {
    var index = 0;
    messages.forEach(function (message) {
        if (message.messageID == messageID) {
            return index;
        }
        index++;
    });
}

export default function twitterMessages(state = [], action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            var result = splitMessage(action.message)

            if (result.constructor != Array) {
                return [
                    ...state
                ]
            }

            var messages = result.map(function (ele) {
                var messageID = uuid.v1();
                return {
                    messageID: messageID,
                    message: ele,
                    time: action.time,
                    authorID: action.authorID
                }
            });

            return [
                ...state,
                ...messages
            ];
        }
        case DELETE_MESSAGE: {
            var deletedMessageIndex = findMessageIndexByID(state, action.messageID)

            return [
                state.slice(deletedMessageIndex, 1)
            ];
        }
        case UPDATE_MESSAGE: {
            return state;
        }
        default:
            return state;
    }
}