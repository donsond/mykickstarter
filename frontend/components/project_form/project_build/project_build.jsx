import React from 'react'

class ProjectBuild extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      option: "overview",
      optionTab: "Basics"
    }
  }
    
  renderBuild() {
      if (this.state.option === "overview") {
        return (
          <div className="projectBuild-inside-container">
            {/* <div>
                header
            </div> */}
            <div className="projectBuild-main-content">
              <div className="projectBuild-heading"> 
                <h1>Project Category</h1>
              </div>
              <div className='projectBuild overview'>
                <h2>Project overview</h2>
                <div>
                  <ul id="overview-list">
                    <li>
                      <button onClick={this.handleTransitionToIndividual("Basics")} id="buildButton">
                        <h3>Basics</h3>
                        <p>Name your project, upload an image or video, and establish your campaign details.</p>
                      </button>
                    </li>
                    <li>
                      <button onClick={this.handleTransitionToIndividual("Rewards")} id="buildButton">
                        <h3>Rewards</h3>
                        <p>Set your rewards and shipping costs.</p>
                      </button>
                    </li>
                    <li>
                      <button onClick={this.handleTransitionToIndividual("Story")} id="buildButton">
                        <h3>Story</h3>
                        <p>Add a detailed project description and convey your risks and challenges.</p>
                      </button>
                    </li>
                    <li>
                      <button onClick={this.handleTransitionToIndividual("People")} id="buildButton">
                        <h3>People</h3>
                        <p>Edit your Kickstarter profile and add collaborators.</p>
                      </button>
                    </li>
                    <li>
                      <button onClick={this.handleTransitionToIndividual("Payment")} id="buildButton">
                        <h3>Payment</h3>
                        <p>Confirm your identity and link a bank account.
                        <span>This may take up to 3 business days to complete</span></p>
                      </button>
                    </li>
                    <li id='overview-review-text'>
                      <div>
                        {/* <div>
                          image
                        </div> */}
                        <div>
                          Submit your project for review
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="projectBuild prepareLaunch">
                <h2>Prepare for launch</h2>
                <div>
                  <button onClick={this.handleTransitionToIndividual("Promotion")}id="buildButton">
                    <h3>Promotion</h3>
                    <p>Generate a project URL and activate your pre-launch page.</p>
                  </button>
                  <p>
                    Launch!
                  </p>
                </div>
              </div>
              <div className="projectBuild support">
                <div>
                  <button id='support-button'>
                    <h3>Creator Handbook</h3>
                    <p>Learn about everything from shipping to communicating with backers.</p>
                  </button>
                  <button id='support-button'>
                    <h3>Creator Questions </h3>
                    <p>Get more help with any step of the process</p>
                  </button>
                </div>
              </div>
              <button>Delete project</button>
            </div>
              {/* <div>
                footer
              </div> */}
          </div>
        )
      } else if(this.state.option === "individual") {
        return (
          <div className="projectBuild-individual-inside-container">
            {/* <div>
                header
            </div> */}
            <div className="individual-main-content">
              <div className="pb-individual-navbar">
                <ul>
                  <li><button onClick={this.handleTransitionToIndividual("Basics")} id='nav-item'>Basics</button></li>
                  <li><button onClick={this.handleTransitionToIndividual("Rewards")} id='nav-item'>Rewards</button></li>
                  <li><button onClick={this.handleTransitionToIndividual("Story")} id='nav-item'>Story</button></li>
                  <li><button onClick={this.handleTransitionToIndividual("People")} id='nav-item'>People</button></li>
                  <li><button onClick={this.handleTransitionToIndividual("Payment")} id='nav-item'>Payment</button></li>
                  <li><button onClick={this.handleTransitionToIndividual("Promotion")} id='nav-item'>Promotion</button></li>
                </ul>
              </div>
              <div className="individual-nav-content">
                {this.renderIndividualNavContent()}
              </div>
            </div>
            {/* <div>
                footer
            </div> */}
          </div>
        )
      }
  }

  renderIndividualNavContent() {
    if (this.state.optionTab === "Basics") {
      return (
        <div>
          <div>
            <h2>Start with the Basics</h2>
            <h3>Make it easy for people to learn about your project.</h3>
          </div>
          <div>
            <div>
              <h3>Project Title</h3>
              <p>Write a clear, brief title that helps people quickly understand the gist of your project.</p>
            </div>
              <div>
                <label>
                  Title
                  <input type='text' placeholder='Papercuts: A Party Game for the Rude and the Well-Read'/>
                </label>
                <label>
                  Subtitle
                  <textarea placeholder='Papercuts is a rowdy card game about books and writing brought to you by Electric Literature.'/>
                </label>
              </div>
          </div>
          <div>
            <div>
              <h3>Project Category</h3>
              <p>Choose the category that most closely aligns with your project.</p>
              {/* <p>Think of where backers may look to find it. Reach a more specific community by also choosing a subcategory.</p> */}
            </div>
            <div>
              <select id="category-selector" name="Category" onChange={(value)=>this.setState({category: value})}>
                <option id="category-def" selected disabled>Category</option>
                <option id="category-option" value="Art">Art</option>
                <option id="category-option" value="Comics">Comics</option>
                <option id="category-option" value="Crafts">Crafts</option>
                <option id="category-option" value="Dance">Dance</option>
                <option id="category-option" value="Design">Design</option>
                <option id="category-option" value="Fashion">Fashion</option>
                <option id="category-option" value="Film &amp; Video">Film &amp; Video</option>
                <option id="category-option" value="Food">Food</option>
                <option id="category-option" value="Games">Games</option>
                <option id="category-option" value="Journalism">Journalism</option>
                <option id="category-option" value="Music">Music</option>
                <option id="category-option" value="Photography">Photography</option>
                <option id="category-option" value="Publishing">Publishing</option>
                <option id="category-option" value="Technology">Technology</option>
                <option id="category-option" value="Theatre">Theatre</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <h3>Project Location</h3>
              <p>Enter the location that best describes where your project is based.</p>
            </div>
            <div>
              <select id='country-selector'name="country">
                <option id='location-def' disabled selected>Country</option>
                <option id='location selector' value="Australia">Australia</option>
                <option id='location selector' value="Austria">Austria</option>
                <option id='location selector' value="Belgium">Belgium</option>
                <option id='location selector' value="Canada">Canada</option>
                <option id='location selector' value="Denmark">Denmark</option>
                <option id='location selector' value="France">France</option>
                <option id='location selector' value="Germany">Germany</option>
                <option id='location selector' value="Hong Kong">Hong Kong</option>
                <option id='location selector' value="Ireland">Ireland</option>
                <option id='location selector' value="Italy">Italy</option>
                <option id='location selector' value="Japan">Japan</option>
                <option id='location selector' value="Luzembourg">Luxembourg</option>
                <option id='location selector' value="Mexico">Mexico</option>
                <option id='location selector' value="New Zealand">New Zealand</option>
                <option id='location selector' value="Norway">Norway</option>
                <option id='location selector' value="Singapore">Singapore</option>
                <option id='location selector' value="Spain">Spain</option>
                <option id='location selector' value="Sweden">Sweden</option>
                <option id='location selector' value="Switzerland">Switzerland</option>
                <option id='location selector' value="the Netherlands">the Netherlands</option>
                <option id='location selector' value="the United Kingdom">the United Kingdom</option>
                <option id='location selector' value="the United States">the United States</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <h3>Project Image</h3>
              <p>Add an image that clearly represents your project.</p>
              <p>
                Choose one that looks good at different sizes. 
                It will appear in different sizes in different places:
                  on your project page, across the Kickstarter website and mobile apps, 
                  and (when shared) on social channels.
              </p>
            </div>
            <div>

            </div>
          </div>  
          <div>
            <div>
              <h3>Project Video</h3>
              <p>Add a video that describes your project.</p>
              <p>
                Tell people what you’re raising funds to do, how you plan to make it happen,
                who you are, and why you care about this project.
              </p>
              <p>
                After you’ve uploaded your video, 
                use our editor to add captions and subtitles 
                so your project is more accessible to everyone.
              </p>
            </div>
            <div>
              <label>
                Embedded Video URL
                <input type='text' placeholder='embedded_video_url' />
              </label>
            </div>
          </div>
        </div>
      )
    } else if (this.state.optionTab === "Rewards") {
      return (
        <div>
          "Rewards" information will be input here!
        </div>
      )
    } else if (this.state.optionTab === "Story") {
      return (
        <div>
          "Story" information will be input here!
        </div>
      )
    } else if (this.state.optionTab === "People") {
      return (
        <div>
          "People" and other collaborators information will be input here!
        </div>
      )
    } else if (this.state.optionTab === "Payment") {
      return (
        <div>
          "Payment" information will be input here!
        </div>
      )
    } else if (this.state.optionTab === "Promotion") {
      return (
        <div>
          "Promotion" and social media information will be input here!
        </div>
      )
    }
  }

  handleIndividualNavBar(value) {
    return () => this.setState({
        optionTab: value
      })
  }
  handleTransitionToIndividual(value) {
    return () => this.setState({option: "individual",
                                optionTab: value,
    })
  }

  render() {
    return (
      <div className='projectBuild-outside-container'>
        {this.renderBuild()}
      </div>
    )
  }
}

export default ProjectBuild;