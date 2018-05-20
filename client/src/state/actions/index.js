export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export function addMessage(message, authorID) {
    var time = new Date();
    return {
        type: 'ADD_MESSAGE',
        message,
        time,
        authorID
    }
}

export function deleteMessage(messageID) {
    return {
        type: 'DELETE_MESSAGE',
        messageID
    }
}
export function updateMessage(messageID, newMessage) {
    var lateseUpdateTime = new Date();
    return {
        type: 'UPDATE_MESSAGE',
        messageID,
        newMessage,
        lateseUpdateTime
    }
}