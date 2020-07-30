import * as projectsUtil from '../util/projects_util'

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'
export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS'
export const DELETE_PROJECT = 'DELETE_PROJECT'

export const receiveProject = (project) => ({
    type: RECEIVE_PROJECT,
    project
})

export const receiveAllProjects = (projects) => ({
    type: RECEIVE_ALL_PROJECTS,
    projects
})

export const deleteProject = (projectId) => ({
    type: DELETE_PROJECT,
    projectId
})


export const fetchProject = (projectId) => dispatch => {
    return projectsUtil.getProject(projectId).then((project) => dispatch(receiveProject(project)));
}

export const fetchAllProjects = () => dispatch => {
    return projectsUtil.getProjects().then((projects) => dispatch(receiveAllProjects(projects)));
}

export const removeProject = (projectId) => dispatch => {
    return projectsUtil.deleteProject(projectId).then(() => dispatch(deleteProject()));
}

export const updateProject = (project) => dispatch => {
    return projectsUtil.patchProject(project.id).then((project) => dispatch(receiveProject(project)));
}

export const createProject = (project) => dispatch => {
    return projectsUtil.postProject(project).then((project) => dispatch(receiveProject(project)));
}

