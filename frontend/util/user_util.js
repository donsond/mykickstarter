
export const getUser = (creatorId) => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${creatorId}`,
    })
}