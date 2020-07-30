import {RECEIVE_CURRENT_USER, DELETE_SESSION} from "../actions/session_actions"

const _nullUser = Object.freeze({
    currentUser: null
})
const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            const currentUser = action.user
            return Object.assign({}, {currentUser})
        case DELETE_SESSION:
            return _nullUser;
        default: 
            return state;
    }
}

export default sessionReducer;