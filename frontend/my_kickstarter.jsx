import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'


// import {receiveSessionErrors} from './actions/session_actions'
import { fetchProject, fetchAllProjects, receiveAllProjects } from './actions/projects_actions'
import { receiveProject } from './actions/projects_actions'
import {receiveUser} from './actions/users_actions'
import { getUser } from './util/user_util'
import { getProjects } from './util/projects_util'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.store = store;
    ReactDOM.render(<Root store={store}/>, root)
});

// window.errors = receiveSessionErrors;
// window.fetchProject = fetchProject;
// window.receiveProject = receiveProject;
// window.receiveUser = receiveUser
// window.getUser = getUser;

window.fetchAllProjects = fetchAllProjects;
window.getProjects = receiveAllProjects

window.getProjects2 = getProjects