import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter, NavLink} from 'react-router-dom';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirectToRegisterPage: false,
        };
        this.toRegister = this.toRegister.bind(this);
    }

    toRegister = () =>{
        this.setState({redirectToRegisterPage: true});
    }

    render(){
        let redirectToLandingPage = this.props.redirectToLandingPage;
        if (redirectToLandingPage){
            return <Redirect to='/landing' />;
        }
        let redirectToRegisterPage = this.state.redirectToRegisterPage;
        if(redirectToRegisterPage){
            return <Redirect to='/register' />;
        }

        return(
            <div>
                <h1>Login FOOOOOOORM</h1>
                <form onSubmit={this.props.onSubmit}>
                    <label>UserName: </label>                    
                    <input type='text' onChange={this.props.onChange} value={this.props.user.username} name='username'/>
                    <br />
                    <label>Password: </label>
                    <input type='text' onChange={this.props.onChange} value={this.props.user.password} name='password'/>
                    <br />
                    <button onClick={this.toRegister}>Register</button>
                    <input type='submit' value='LOG IN'/>
                    <ErrorMessage error={this.props.errorMessage} />
                    <br />
                </form>
            </div>
        )
    }
}


const ErrorMessage = ({error}) => (
    <p>{error}</p>
)

export default LoginForm;