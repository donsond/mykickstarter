import React from 'react' 

class ProjectShow extends React.Component {
    constructor(props) {
        super(props)
        this.state ={ content: "Campaign"}
        // this.state.project = null;
        // this.state.creator = null;
        // this.state.content = "Campaign"
        // this.content = "Campaign"
        this.render = this.render.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }
    componentDidMount() {
        const projectId = this.props.match.params.projectId;
        this.props.fetchProject(projectId)
        
        // this.state.creator = this.props.fetchCreator(1)
        // this.setState({creator: this.props.fetchCreator(this.state.project.creator_id)})
    }

    renderContent() {
        if(this.state.content === "Rewards") {
            return (
                <div>
                    Rewards will be displayed here!
                </div>
            )
        } else if(this.state.content === "FAQs") {
            return (
                <div>
                    FAQs will be displayed here!
                </div>
            )
        } else if(this.state.content === "Updates") {
            return (
                <div>
                    Updates will be displayed here!
                </div>
            )
        } else if(this.state.content === "Comments") {
            return (
                <div>
                    Comments will be displayed here!
                </div>
            )
        } else if(this.state.content === "Community") {
            return (
                <div>
                    Community information will be displayed here!
                </div>
            )
        } else {
            return (
                <div>
                    Campaign information will be displayed here!
                </div>
            )
        } 
    }

    handleChangeContent(value) {
        return () => this.setState({content: value})
    }

    render() {
        // debugger;
        if (this.props.project) {
            const endDate = new Date(this.props.project.campaign_end_date);
            const today = new Date();
            return (
                <div className="project show">
                    <div className="project heading">
                        <h2>{this.props.project.title}</h2>
                        <p>
                            {this.props.project.body}
                        </p>
                    </div>
                    <div className="project video_info container">
                        <div className="project video">
                            <div className="project video frame">
                                {/* <video width="320" height="240" controls>
                                    <source src="../../../assets/videos/skating.mp4" type="video/mp4"/>
                                    Your browser does not support this video
                                    <iframe src="https://player.vimeo.com/video/127547570?color=f9dc27" 
                                    width="640" height="360" frameborder="0" allow="autoplay; 
                                    fullscreen" allowfullscreen></iframe>
                                </video> */}
                                <iframe id="project-video" 
                                        width="830" height="467" 
                                        src={this.props.project.video_url}
                                        frameBorder="0" 
                                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                />
                                {/* <iframe id="project-video" 
                                    width="830" height="467" 
                                    src="https://www.youtube.com/embed/IlIFMetsv0k" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe> */}
                            </div>
                            <div className="project video footer">
                                <ul>
                                    <li>Project We Love</li>
                                    <li>Tabletop Games</li>
                                    <li>Location</li>
                                </ul>
                            </div>
                        </div>
                        <div className="project info container">
                            <div className="project info">
                                <div className="project info currentFunding">
                                    <strong>{"$0"}</strong>
                                    <p> pledged of ${this.props.project.funding_required} goal </p>
                                </div>
                                <div className="project info numBackers">
                                    <strong>{"0"}</strong>
                                    <p>Backers</p> 
                                </div>
                                <div className="project info daysRemaining">
                                    <strong>{Math.round((endDate - today)/86400000)}</strong>
                                    <p>days to go</p> 
                                </div>
                            </div>
                            <div className="project backButton">
                                <button id="backButton">Back this project</button>
                            </div>
                            <div className="project disclaimer">
                                <p>
                                    All or nothing. 
                                    This project will only be funded if 
                                    it reaches its goal by {endDate.toUTCString()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="project nav">
                        <div>
                            <div className="navlist">
                                <ul id="navlist">
                                    <li><button id="projectNavButtons"onClick={this.handleChangeContent("Campaign")}>Campaign</button></li>

                                    <li className="rewards-tab"><button id="projectNavButtons"onClick={this.handleChangeContent("Rewards")}>Rewards</button></li> {/*hide this unless page is small*/}

                                    <li><button id="projectNavButtons"onClick={this.handleChangeContent("FAQs")}>FAQs</button></li>

                                    <li><button id="projectNavButtons"onClick={this.handleChangeContent("Updates")}>Updates</button></li>

                                    <li><button id="projectNavButtons"onClick={this.handleChangeContent("Comments")}>Comments</button></li>

                                    <li><button id="projectNavButtons"onClick={this.handleChangeContent("Community")}>Community</button></li>
                                </ul>
                            </div>
                            <div>
                                {/*hidden green button*/}
                            </div>
                        </div>
                        <div className="project main">
                            {/*content*/}
                            {this.renderContent()}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Loading Project</p>
                </div>
            )
        }
    }
}

export default ProjectShow