
export const postProject = (project) => {
    return $.ajax({
        method: 'POST',
        url: 'api/projects/',
        data: {project}
    })
}

export const getProject = (projectId) => {
    return $.ajax({
        method: 'GET',
        url: `api/projects/${projectId}`,
    })
}

export const deleteProject = (projectId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/projects/${projectId}`,
    })
}

export const patchProject = (project) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/projects/${project.id}`,
        data: {project}
    })
}

export const getProjects = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/projects/',
    })
}
