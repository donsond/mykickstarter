import { connect } from 'react-redux'
import ProjectShow from './project_show'
import {fetchProject} from '../../actions/projects_actions'
import {fetchUser} from '../../actions/users_actions'

const mapStateToProps = (state, ownProps) => ({
    // creator: state.users[state.entities.projects[ownProps.match.params.projectId].creator_id,
    // const projectId= parseInt(ownProps.match.params.projectId);
    // const project = fetchProject(state.entities, projectId);
    // return ({
    //     project,
    //     projectId,
    // })
    project: state.entities.projects[ownProps.match.params.projectId],
})

const mapDispatchToProps = (dispatch) => ({
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    // fetchCreator: (creatorId) => dispatch(fetchUser(creatorId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)