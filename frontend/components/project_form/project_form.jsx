import React from 'react'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {question: "Category",
                    project: {
                        category: "",
                        location: "",
                        body: "",
                    }}
    }
    changeQuestion(nextQ, field, data) {
        return (
            () => this.setState({question: nextQ,
                    project: { [field]: data },
                }
            )
        )
    }

    handleContinue() {
        return () => this.props.history.push('/projects/build')
    }
    
    renderInitialProjectFormFooter() {
        return (
            <div className="projectForm-footer">
                <p>
                    To create a project, you're required to provide your location, 
                    age, national ID, banking and tax information, email, and 
                    mailing address. This information is necessary to prevent 
                    fraud, comply with the law, and — if your project is 
                    successful — to deliver funds. Please note: after launch, your 
                    ability to edit, hide, or delete a project is limited.
                </p>
            </div>
        )
    }
    renderInitial() {
        if(this.state.question === "Category") {
            return (
                <div className="projectForm-category-container">
                    <p>1 of 3</p>
                    <div className="projectForm-category">
                        <div className="category heading">
                            <h1>First, let's get you set up.</h1>
                            <p>Pick a project category to connect with a specific community. 
                                You can always update this later.
                            </p>
                        </div>
                        <div className="form-main-input">
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
                        <div className="form-nav-buttons">
                            <span>Hello, Super Creator</span>
                            <button id='continue' onClick={this.changeQuestion('Project Idea')}>Next: Project idea</button>
                        </div>
                        {this.renderInitialProjectFormFooter()}
                    </div>
                </div>
            )
        } else if(this.state.question === "Project Idea") {
            return (
                <div className="projectForm-idea-container">
                    <p>2 of 3</p>
                    <div className="projectForm-idea">
                        <div className="idea heading">
                            <h1>Describe what you'll be creating.</h1>
                            <p>And don't worry, you can edit this later, too.</p>
                        </div>
                        <div className="form-main-input-idea">
                            <textarea id="text-box"
                            placeholder="An album of songs based on Pablo Neruda poems."/>
                        </div>
                        <div className="form-nav-buttons">
                            <span><button onClick={this.changeQuestion('Category')}>&#8592; Category</button></span>
                            <button id='continue' onClick={this.changeQuestion('Location')}>Next: Location</button>
                        </div>
                        {this.renderInitialProjectFormFooter()}
                    </div>
                </div>
            ) 
        } else if (this.state.question === "Location") {
            return (
                <div className="projectForm-location-container">
                    <p>3 of 3</p>
                    <div className="projectForm-location">
                        <div className="location heading">
                            <h1>Finally, let's confirm your eligibility.</h1>
                            <p>And don't worry, you can edit this later, too.</p>
                        </div>
                        <div className="form-main-input">
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
                        <div className='projectForm-location-checkboxes'>
                            <label id='checkbox'>
                                <input type='checkbox'/>I am at least 18 years old.
                            </label>
                            <label id='checkbox'>
                                <input type='checkbox'/>I can verify a bank account and government-issued ID.
                            </label>
                            <label id='checkbox'>
                                <input type='checkbox'/>I have a debit and/or credit card.
                            </label>
                        </div>
                        <div className="form-nav-buttons">
                            <span><button onClick={this.changeQuestion('Project Idea')}>&#8592; Project Idea</button></span>
                            <button id='continue' onClick={this.handleContinue()}>Continue</button>
                        </div>
                        {this.renderInitialProjectFormFooter()}
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="projectForm container">
                {this.renderInitial()}
            </div>
        )
    }
}

export default ProjectForm;