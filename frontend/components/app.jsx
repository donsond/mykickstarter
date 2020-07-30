import React from 'react'
import {Link, Switch, Route, Redirect} from 'react-router-dom'
import LoginContainer from './session/login_container.jsx';
import SignupContainer from './session/signup_container.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import Test from './test'
import { logout } from '../actions/session_actions.js';
import { connect } from 'react-redux';
import ProjectShowContainer from './project_show/project_show_container.js';
import projectFormContainer from './project_form/project_form_container.js';
import projectBuildContainer from './project_form/project_build/project_build_container'

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
    action: () => dispatch(logout())
})

class App extends React.Component {
    constructor(props) {
        super(props)
        this.logoutUser = this.logoutUser.bind(this);

    }

    logoutUser(){
        this.props.action();
    }

    loginHeader() {
        if (this.props.currentUser) {
            return (
                <div>
                    <button id='nav-logout' onClick={this.logoutUser}>Log out</button>
                    <p>Hi {this.props.currentUser.name.split(" ")[0]}</p>
                </div>
            )
        } else {
            return (
                <p><Link id='nav-login' to='/login'>Log in</Link></p>
            )
        }
    }
    
    render() {
        return (
            <div>
                <header className='main-header'>
                    <ul className='main-nav'>
                        <li>
                            <div id='nav-left'> 
                                <p>Explore</p>
                                <p><Link to='/projects/new'>Start a project</Link></p>
                            </div>
                        </li>
                        <li><Link to='/' id='main-title'><h1>MyKickstarter</h1></Link></li>
                        <li>
                            <div id='nav-right'>
                                <p>Search</p>
                                {this.loginHeader()}
                            </div>
                        </li>
                    </ul>
                </header>

                <div className='main-body'>
                    <Switch>
                        <AuthRoute exact path='/login' component={LoginContainer}/>
                        <AuthRoute exact path='/signup' component={SignupContainer}/>
                        {/* <Route 
                            exact path='/'
                            render={() => (this.props.currentUser ? <Home /> : <Redirect to="/login" />)}
                        /> */}
                        <Route exact path='/' component={Test}/>
                        <ProtectedRoute exact path='/projects/new' component={projectFormContainer} />
                        <ProtectedRoute exact path='/projects/build' component={projectBuildContainer} />
                        {/* <Route exact path='/projects/new' component={projectFormContainer} />
                        <Route exact path='/projects/build' component={projectBuildContainer} /> */}
                        <Route path='/projects/:projectId' component={ProjectShowContainer}/>
                    </Switch>
                </div>

                <footer className='main-footer'>
                    {/* <div id='footer-container'> */}
                        <div id='categories'>
                            <ul>
                                <li>Arts</li>
                                <li>Comics &amp; Illustration</li>
                                <li>Design &amp; Tech</li>
                                <li>Film</li>
                                <li>Food &amp; Craft</li>
                                <li>Games</li>
                                <li>Music</li>
                                <li>Publishing</li>
                            </ul>
                        </div>
                        <div id='technical-docs'>
                            <ul>
                                <li><strong>About</strong></li>
                                <li>About us</li>
                                <li>Our charter</li>
                                <li>Stats</li>
                                <li>Press</li>
                                <li>Jobs</li>
                            </ul>
                            <ul>
                                <li><strong>Support</strong></li>
                                <li>Help Center</li>
                                <li>Our Rules</li>
                                <li>Creator Handbook</li>
                                <li>Patrons</li>
                            </ul>
                            <ul>
                                <li><strong>HELLO</strong></li>
                                <li>Newsletters</li>
                                <li>Mobile apps</li>
                                <li>MyKickstarter Blog</li>
                                <li>Engineering Blog</li>
                                <li>Research</li>
                            </ul>
                            <ul>
                                <li><strong>MORE FROM MYKICKSTARTER</strong></li>
                                <li>The Creative Independent</li>
                                <li>MyKickstarter Magazine</li>
                                <li>MyKickstarter Podcast</li>
                            </ul>
                        </div>
                        <div id='copyrights-social'>
                            <div>
                                <p>MyKickstarter, &copy; 2020</p>
                            </div>
                            <div>
                                <p>Social And Currency</p>
                            </div>
                        </div>
                        <div id='terms-cookies-privacy'>
                            <ul>
                                <li>Trust and Safety</li>
                                <li>Terms of Service</li>
                                <li>Privacy Policy</li>
                                <li>Cookie Policy</li>
                                <li>Accessibility Statement</li>
                            </ul>
                        </div>
                    {/* </div> */}
                </footer>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);