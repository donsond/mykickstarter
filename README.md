# Kickstarter-Clone

This app allows users to support crowdfunded projects as well create their own crowdfunded projects. Users who back projects will be able to receive rewards based on their contribution. In order to create or back a project, users will have to create an account or login to an existing account. This user-authentication process has presence validations for all field while also validating password length, email type, password confirmation, and email confirmation. 

The live website for this application can be found at https://my-kickstarter.herokuapp.com/#/

The projects are visible to any user along with rewards, comments, faqs, and updates related to each project. 

The users are also able to create a project that will be pushed to the database. In order to create a project, the users are guided towards a form that will take in the required information in various steps.

Future Steps:
    -Make rewards and users slice of state.
    -Finish implementing new project creation
    -Make users able to back projects and receive the rewards associated with tier.
    -Apply HTMLparser and ReactQuill in order to obtain the "Story" of each project
    -Make comments and FAQs models and slices of state
    -Make CSS cleaner in order function dynamically.
