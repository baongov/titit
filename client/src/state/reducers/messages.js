import { 
    ADD_MESSAGE,
    DELETE_MESSAGE,
    UPDATE_MESSAGE
} from '../actions'

// twitterMessages : [{
//     author : 
//     time :
//     text :
// }]

const findMessageIndexByID = function(messages, messageID) {
    var index = 0;
    messages.forEach(function(message) {
        if (message.messageID == messageID) {
            return index;
        }
        index++;
    });
} 

export default function twitterMessages(state = [], action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            return [
                ...state,
                {
                    messageID : action.messageID,
                    message:action.message,
                    time: action.time,
                    authorID: action.authorID
                }
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