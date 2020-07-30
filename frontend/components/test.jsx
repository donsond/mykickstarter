import React from 'react'
import { logout } from '../actions/session_actions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { fetchAllProjects } from '../actions/projects_actions';

const mapStateToProps = (state) => ({
    // currentUser: state.session.currentUser,
    projects: Object.values(state.entities.projects),
})

const mapDispatchToProps = dispatch => ({
    // action: () => dispatch(logout()),
    getProjects: () => dispatch(fetchAllProjects())
})

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.renderProjects = this.renderProjects.bind(this);
        this.render = this.render.bind(this);
        // this.logoutUser = this.logoutUser.bind(this);
    }

    componentDidMount() {
        this.props.getProjects()
    }
    // logoutUser() {
    //     ().then(() => this.props.history.push('/'));
    // }
    renderProjects() {
        debugger;
        if (this.props.projects) {
            return <ul>
                {this.props.projects.map((project) => {
                return (
                    <li key={project.id}><Link to={`/projects/${project.id}`}>{project.title}</Link></li>
                )
            })}
            </ul>
        } else {
            return <div>
                Loading
            </div>;
        }
    }

    render() {
        return (
            <div className='testing-outside-container'>
                {/* <p> This page can only be seen if you are logged in!</p>
                <p>Hi {this.props.currentUser.name}</p>
                <p>Your Email is {this.props.currentUser.email}</p>
                <p><button onClick={this.props.action}>Log out</button></p> */}
                {/* <ul>    */}
                {/* <div>
                    For testing purposes, please login as 
                    <ul>
                        <li>
                            Email: testing@myKickstarter.com
                        </li>
                        <li>
                            Password: 123456
                        </li>
                    </ul>
                </div> */}
                {this.renderProjects()}
                {/* </ul> */}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);