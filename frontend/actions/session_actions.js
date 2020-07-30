import * as SessionUtil from '../util/session_util'

export const DELETE_SESSION = "DELETE_SESSION"
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const CLEAR_ERRORS = "CLEAR_ERRORS"

const deleteSession = () => ({
    type: DELETE_SESSION,
})

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user,
})

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
})

export const login = (loginUser) => dispatch => {
    return SessionUtil.postSession(loginUser)
    .then((user) => dispatch(receiveCurrentUser(user)), (errors) => dispatch(receiveSessionErrors(errors.responseJSON)));
}

export const signup = (newUser) => dispatch => {
    return SessionUtil.postUser(newUser)
    .then((user) => dispatch(receiveCurrentUser(user)), (errors) => dispatch(receiveSessionErrors(errors.responseJSON)));
}

export const logout = () => dispatch => {
    return SessionUtil.deleteSession()
    .then(() => dispatch(deleteSession()));
}