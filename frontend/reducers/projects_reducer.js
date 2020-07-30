import { RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS, DELETE_PROJECT } from "../actions/projects_actions";


const projectsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PROJECT:
            const newProject = {};
            const creator = {};
            creator['creator'] = action.user;
            newProject[action.project.id] = Object.assign({}, action.project, creator)
            return Object.assign({}, state, newProject);
        case RECEIVE_ALL_PROJECTS:
            return Object.assign({}, action.projects);
        case DELETE_PROJECT:
            newState = Object.assign({}, state);
            delete newState[action.projectId]
            return newState;
        default:
            return state;
    }
}

export default projectsReducer;