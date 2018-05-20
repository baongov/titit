const initAuth = {
    authorID: null,
    authorName: 'Anonymous',
    loginSessionID: null
}

export default function authentication(state = initAuth, action) {
    switch (action.type) {
        default:
            return state;
    }
}