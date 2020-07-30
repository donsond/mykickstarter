import SessionForm from "./session_form";
import React from 'react'
import {connect} from 'react-redux'
import {login, clearErrors} from '../../actions/session_actions'
import {Link} from 'react-router-dom'


const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    formType: 'Log in',
    altPath: <Link id='alt-link' to='/signup'> Sign Up</Link>,
});

const mapDispatchToProps = (dispatch) => ({
    action: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);