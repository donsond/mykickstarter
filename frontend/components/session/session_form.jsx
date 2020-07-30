import React from 'react'
import {Link} from 'react-router-dom'


class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.user
        this.state = {
            name: '',
            email: '',
            email_confirmation: '',
            password: '',
            password_confirmation: '',
            passConfirm: false,
            emailConfirm: false,
        }
        // this.passConfirm =  0;
        // this.emailConfirm = false;
        this.renderName = this.renderName.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.renderErrorContainer = this.renderErrorContainer.bind(this);
        this.changeEmailConfirm = this.changeEmailConfirm.bind(this);
        this.changePassConfirm = this.changePassConfirm.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }
    componentWillUnmount() {
        this.props.clearErrors();
    }

    demoLogin() {
        const user = {
            email: "testing@myKickstarter.com",
            password: "123456"
        }
        this.setState(user);
        
        this.props.action(user).then(() => this.props.history.push('/'));

    }

    renderName() {
        if (this.props.formType === 'Sign up') {
            return (
                <label className='input name'>
                    <input 
                    type='text' 
                    placeholder='Name'
                    onChange={this.handleChange('name')} 
                    value={this.state.name}
                    />
                </label>
            )
        } else {
            return (null)
        }
    }

    extras() {
        if (this.props.formType === 'Sign up') {
            return (
                <div id='signup-checkbox'>
                    <label>
                        <input type='checkbox'/>
                        Send me a weekly mix of handpicked projects, plus occasional myKickstarter news
                    </label>
                    <label>
                        <input type='checkbox'/>
                        Contact me about participating in myKickstarter research
                    </label>
                </div>
            )
        } else {
            return (
                <div className='forgotPass'>
                    {/* <Link id='forgotPass' to='/forgotPassword'>Forgot your password?</Link> */}
                    <p id='forgotPass'>Forgot your password?</p>
                </div>
            )
        }
    }
    
    alternate(){
        if (this.props.formType === 'Sign up') {
            return (
                <label className='alternate login'>
                    Have an account? 
                    {this.props.altPath}
                </label>
            )
        } else {
            return (
                <label className='alternate signup'>
                    New to myKickstarter? 
                    {this.props.altPath}
                </label>
            )
        }
    }

    alternatePath() {
        return this.props.altPath
    }
    facebook() {
        return (
            <div className='facebook'>
                <div id='fb-container'>
                    <Link id='facebook' to='/facebook'>
                        Continue with Facebook
                    </Link>
                </div>
                <p>
                    Get notified when your friends back and launch projects. 
                    We'll never post anything on Facebook without your permission.
                </p>
            </div>
        )
    }

    submitButton() {
        if (this.props.formType === 'Sign up') {
            return (
                <div className='auth-submit'>
                    <button type="submit" id='auth-submit'>Create Account</button>
                    <label>
                        By signing up, you agree to our terms of use, privacy policy, and cookie policy.
                    </label>
                    {/* The above text with links is implemented below for future implementation */}
                    {/* <label>
                        By signing up, you agree to our 
                        <Link id='signup-terms' to='/terms-of-use'> terms of use</Link>,
                        <Link id='signup-terms' to='/privacy-policy'> privacy policy</Link>,
                        and
                        <Link id='signup-terms' to='/cookie-policy'> cookie policy</Link>.
                    </label> */}
                </div>
            )
        } else {
            return (
                <div className='auth-submit'>
                    <button type="submit" id='auth-submit'>{this.props.formType}</button>
                    <button id='auth-submit' onClick={this.demoLogin}>Demo Login</button>
                    {/* Remember Me has not been implemented yet */}
                    {/* <input type='checkbox' id='rememberMe'/><label>
                        Remember Me
                    </label> */}
                </div>
            )
        }
    }

    recaptcha() {
        if (this.props.formType === 'Log in') {
            return (
                <p id='recaptcha'>
                    This site is not yet protected by reCAPTCHA and the 
                    Google Privacy Policy and Terms of Service do not apply.
                </p>
            )
        } else { return (null) }
    }

    renderErrors() {
        return this.props.errors.map((err, i) => {
            return ( <li id='errors' key={`error-${i}`}> {err} </li> )
        })
    }

    renderErrorContainer() {
        if  (this.props.errors.length > 0) {
            return (
                <ul id='errors-container'>
                    {this.renderErrors()}
                </ul>
            )
        } else {
            return (null)
        }
    }
    renderEmailConfirm () {
        if ((this.state.emailConfirm) && (this.props.formType == 'Sign up')) {
            return (
                <label className='input email_confirmation'>
                    <input 
                        type='email' 
                        placeholder='Re-enter Email'
                        onChange={this.handleChange('email_confirmation')} 
                        value={this.state.email_confirmation}
                    />
                </label>
        )} else {
            return (null)
        }
        
    }
    renderPasswordConfirm() {
        if ((this.state.passConfirm) && (this.props.formType == 'Sign up')) {
            return (
                <label className='input password_confirm'>
                    <input 
                    type='password' 
                    onChange={this.handleChange('password_confirmation')} 
                    placeholder='Re-enter Password'
                    value={this.state.password_confirmation}
                    />
                </label>
        )} else {
            return (null)
        }
    }
    changePassConfirm() {
        return () => this.setState({passConfirm: true})
    }

    changeEmailConfirm() {
        return () => {
            return this.setState({emailConfirm: true})
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.action(user).then(() => this.props.history.push('/'));
    }

    handleChange(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        return (
            <div className='auth outside-container'>
                <div className='auth inside-container'>
                    <div className={`auth ${this.props.formType}`}>
                        <h1>{this.props.formType}</h1>
                        {this.renderErrorContainer()}

                        <form onSubmit={this.handleSubmit}>

                            {this.renderName()}
                            <label className='input email'>
                                <input 
                                type='email' 
                                placeholder='Email'
                                onFocus = {this.changeEmailConfirm()}
                                onChange={this.handleChange('email')} 
                                value={this.state.email}
                                />
                            </label>
                            {this.renderEmailConfirm()}

                            <label className='input password'>
                                <input 
                                type='password' 
                                onFocus = {this.changePassConfirm()}
                                onChange={this.handleChange('password')} 
                                placeholder='Password'
                                value={this.state.password}
                                />
                            </label>

                            {this.renderPasswordConfirm()}

                            {/* {this.extras()} */}

                            {this.submitButton()}

                            {/* <p id='or'> or </p> */}
                            {/* {this.facebook()} */}
                        </form>
                        {this.alternate()}

                        {this.recaptcha()}
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;