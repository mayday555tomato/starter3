import React, {Component} from 'react';
import LoginForm from './LoginForm';

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

        fetch('/users', {
            method: 'POST',
            body: JSON.stringify(this.state.user),
            headers: {'Content-Type': 'application/json'},
        }).then(res => {
            if(res.status === 200){
                this.setState({redirectToLandingPage: true});
            }else {
                res.json().then(error => this.setState({errorMessage: error.message}));
            }
        }).catch(error => console.log(error));
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