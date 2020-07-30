import {RECEIVE_USER} from '../actions/users_actions'

const usersReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USER:
            const newUser = {};
            newUser[action.user.id] = action.user
            return Object.assign({}, state, newUser)
        default:
            return state;
    }
}

export default usersReducer;