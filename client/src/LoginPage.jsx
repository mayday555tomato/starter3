import React, {Component} from 'react';
import LoginForm from './LoginForm';
import Auth from './Auth';

class LoginPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            errorMessage: '',
            user: {
                username: '',
                password: ''
            },
            redirectToLandingPage: false,
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        console.log('username: ' + this.state.user.username);
        console.log('password: ' + this.state.user.password);

        Auth.authenticate(this.state.user, (isAuthenticated, errorMessage) =>{
            if(isAuthenticated){
                this.setState({redirectToLandingPage: true});
                console.log('success');
            }else{
                this.setState({errorMessage: errorMessage});
            }
        });

        console.log(`Auth.isAuthenticated VALUE:  ${Auth.isAuthenticated}`);
    }

    onChange(e){
        let field = e.target.name;
        let user = this.state.user;
        user[field] = e.target.value;
        this.setState({user: user});
    }

    render(){
        return (
            <LoginForm onSubmit={this.onSubmit} onChange={this.onChange} errorMessage = {this.state.errorMessage} user = {this.state.user} redirectToLandingPage={this.state.redirectToLandingPage} />
        )
    }
}

export default LoginPage;