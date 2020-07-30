import { connect } from "react-redux"
import ProjectBuild from "./project_build"
import { createProject } from "../../../actions/projects_actions"

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    createProject: (post) => dispatch(createProject(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBuild);