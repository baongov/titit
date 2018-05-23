import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../actions';

const initAuth = {
    authenticated: false,
    authorID: "Anonymous",
    authorName: null,
    uid: null
};


export function authentication(state = initAuth, action) {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return {
                authenticated: true,
                authorID: action.authorID,
                authorName: action.authorName,
                uid: action.uid
            };

        case SIGN_OUT_SUCCESS:
            return initAuth

        default:
            return state;
    }
}
