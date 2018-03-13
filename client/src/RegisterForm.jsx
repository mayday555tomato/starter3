import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirectToLoginPage: false,
        }
    }

    toLoginPage = () =>{
        this.setState({redirectToLoginPage: true});
    }

    render(){
        if(this.state.redirectToLoginPage){
            return <Redirect to='/login' />;
        }

        return(
                <div>
                    <form onSubmit={this.props.onSubmit} >
                        <h1>Register</h1>
                        <label>UserName: </label>                    
                        <input type='text' onChange={this.props.onChange} name='username' />
                        <br />
                        <label>Password: </label>
                        <input type='text' onChange={this.props.onChange} name='password1' />
                        <br />
                        <label>Password Again: </label>
                        <input type='text' onChange={this.props.onChange} name='password2' />
                        <br />
                        <input type='submit' value='Register' />
                        <button onClick={this.toLoginPage}>Login</button>
                        <ErrorMessage error={this.props.errorMessage} />
                    </form>
                </div>
        )
    }
}

const ErrorMessage = ({error}) => (
    <p>{error}</p>
)


export default RegisterForm;