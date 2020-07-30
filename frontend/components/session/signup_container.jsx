import SessionForm from "./session_form";
import React from 'react'
import {connect} from 'react-redux'
import {signup, clearErrors} from '../../actions/session_actions'
import {Link} from 'react-router-dom'

const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    formType: 'Sign up',
    altPath: <Link id='alt-link' to='/login'>Log In</Link>,
    altPathName: <strong> Log in</strong>
});

const mapDispatchToProps = (dispatch) => ({
    action: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);