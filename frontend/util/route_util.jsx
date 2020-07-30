import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ component: Component, path, loggedIn}) => (
    <Route
        path={path} 
        render={props => (
            loggedIn ? <Redirect to='/' /> : <Component {...props} />
        )}
    />
);

const Protected = ({ component: Component, path, loggedIn }) => (
    <Route
        path={path} 
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        )}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, undefined)(Protected))