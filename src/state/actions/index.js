import firebase from 'firebase';
import { firebaseAuth } from '../../firebase';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export function addMessage(message, authorID) {
    var time = String(new Date());
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

export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';

export function authenticate(provider, dispatch) {
    firebaseAuth.signInWithPopup(provider)
        .then(result => dispatch(signInSuccess(result)))
        .catch(error => dispatch(signInError(error)));
}

export function signInError(error) {
    return {
        type: SIGN_IN_ERROR,
        payload: error
    };
}

export function signInSuccess(result) {
    const providerData = result.user.providerData[0];

    return {
        type: SIGN_IN_SUCCESS,
        authorID: providerData.email,
        authorName: providerData.displayName,
        uid: providerData.uid
    };
}

export function signInWithGoogle(dispatch) {
    return authenticate(new firebase.auth.GoogleAuthProvider(), dispatch);
}

export function signOut(dispatch) {
    firebaseAuth.signOut()
        .then(() => dispatch(signOutSuccess()));
}

export function signOutSuccess() {
    return {
        type: SIGN_OUT_SUCCESS
    };
}
